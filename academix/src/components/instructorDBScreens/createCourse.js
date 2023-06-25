import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { GoCloudUpload } from "react-icons/go";
import { MdOutlineAddCircle } from "react-icons/md";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { categories, intendedLearners } from "../../model/categories";
import DropZone from "react-dropzone";
import ModuleCard from "../module/moduleCard";
import { FaSave, FaUpload } from "react-icons/fa";
import ModuleDialog from "../module/module.dialog";
import sizeof from "object-sizeof";
import ReactPlayer from "react-player";
import axios from "../../utility/axios.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../App";

export const ModuleContext = createContext(null);

function CreateCourse() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [modeParam] = useSearchParams();

  const dialogRef = useRef();
  const previewVidRef = useRef();

  const [mode, setMode] = useState(null);
  const [accessProtocol, setAccessPtorocol] = useState("Free");
  const [price, setPrice] = useState(null);
  const [courseID, setCourseID] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [targetLearners, setTargetLearners] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [previewVid, setPreviewVid] = useState(null);
  const [createdModules, setCreatedModules] = useState(null);

  // dialog manager...
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const mode = modeParam.get("mode");
    const courseID = modeParam.get("courseID");
    setCourseID(courseID);
    setMode(mode);
  }, []);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      let transformedModule = [];
      const courseDetails = await axios.get(
        `/fetch-course-details/${courseID}`
      );
      const fetchedDetails = courseDetails?.data.data;
      console.log(fetchedDetails)
      setTitle(fetchedDetails.title);
      setDescription(fetchedDetails.description);
      setCategory(fetchedDetails.category);
      setTargetLearners(fetchedDetails.intended_learners);
      setPreviewImg(fetchedDetails.thumbnail.url);
      setPreviewVid(fetchedDetails.preview_video.url);
      setPrice(fetchedDetails.price);
      setAccessPtorocol(fetchedDetails.accessProtocol);

      for (const module of fetchedDetails.modules) {
        let currentModule = { ...module };
        for (const content in module.contents) {
          currentModule.contents = [...module.contents];
          const video = currentModule.contents[content].video.url;
          currentModule.contents[content] = {
            ...currentModule.contents[content],
            video,
          };
        }
        transformedModule.push(currentModule);
      }
      setCreatedModules(transformedModule);
    };
    courseID && fetchCourseDetails();
  }, [mode]);

  useEffect(() => {
    // console.log(sizeof(previewVid) * Math.pow(10, -6));
  }, [previewVid]);

  const initializeDialog = (module, index) => {
    setDialogOpen(true);
    dialogRef.current?.stageModule({ module, index });
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const learnersHandler = (e) => {
    setTargetLearners(e.target.value);
  };

  const genBase64 = (file) => {
    const reader = new FileReader();
    const promise = new Promise((resolve, reject) => {
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (err) => reject(err);
    });

    reader.readAsDataURL(file);
    return promise;
  };

  const fileUploaderHandler = async (files, type) => {
    files.forEach(async (file) => {
      const stringFormat = await genBase64(file);
      if (type === "img") {
        setPreviewImg(stringFormat);
      }
      if (type === "vid") {
        setPreviewVid(stringFormat);
      }
    });
  };

  const addModuleHandler = () => {
    let modules = createdModules;
    if (!modules) {
      setCreatedModules([
        {
          title: "",
          description: "",
          duration: "",
          contents: [],
        },
      ]);
    }
    if (modules) {
      setCreatedModules([
        ...createdModules,
        {
          title: "",
          description: "",
          duration: "",
          contents: [],
        },
      ]);
    }
  };

  const deleteModuleHandler = (moduleIndex) => {
    // let modules = JSON.parse(localStorage.getItem("modules"));
    const updatedModules = createdModules.filter(
      (module, index) => index !== moduleIndex
    );
    setCreatedModules(updatedModules);
    // return localStorage.setItem("modules", JSON.stringify(updatedModules));
  };

  const uploadCourseHandler = async () => {
    const currentUser = JSON.parse(user);
    const courseData = {
      accessProtocol,
      price: price && Number(price),
      thumbnail: previewImg,
      preview_video: previewVid,
      title: title,
      description: description,
      category: category,
      intended_learners: targetLearners,
      modules: createdModules,
      instructorName: `${currentUser.firstname} ${currentUser.lastname}`,
      // totalDuration:
    };

    const initialToastID = toast.loading("Please wait, Uploading course...");
    try {
      const uploader = await axios.post(
        `/create-course?mode=${mode}&courseID=${courseID}`,
        courseData
      );
      toast.update(initialToastID, {
        render: uploader.data.message,
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/dashboard/instructor/courses");
      }, 2000);
    } catch (err) {
      if (err.message) {
        let errorMessage = err.message;
        if (err.message === "timeout of 10000ms exceeded") {
          errorMessage = "Request timeout";
          return toast.update(initialToastID, {
            render: errorMessage,
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        } else if (err.message === "Request failed with status code 400") {
          if (err.response.data.message) {
            toast.update(initialToastID, {
              render: err.response.data.message,
              type: "error",
              isLoading: false,
              autoClose: 5000,
            });
          }
        } else {
          toast.update(initialToastID, {
            render: err.message,
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      }
    }
  };

  return (
    <ModuleContext.Provider value={{ createdModules, setCreatedModules }}>
      <ToastContainer />
      <Box
        component="form"
        sx={{
          pt: 12,
          height: "100%",
          width: "100%",
          px: 2,
          width: "90%",
          overflowY: "scroll",
          display: "flex",
          flexFlow: "column",
          gap: 2,
          boxSizing: "border-box",
        }}
      >
        <TextField
          variant="outlined"
          required
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          label="Course title"
          name="Title"
          multiline
          maxRows={2}
          value={title || ""}
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          id="outlined-multiline-static"
          onChange={(e) => setDescription(e.target.value)}
          label="Course description"
          name="description"
          multiline
          minRows={3}
          value={description || ""}
        />
        <FormControl
          fullWidth
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "column",
            gap: 2,
          }}
        >
          <InputLabel id="demo-simple-select-label">Course Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category || ""}
            label="Course Category"
            onChange={categoryChangeHandler}
          >
            {categories.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>

          <FormControl
            fullWidth
            sx={{
              width: "100%",
              display: "flex",
              flexFlow: "column",
              gap: 2,
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Intended Learners
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={targetLearners || ""}
              label="Intended Learners"
              onChange={learnersHandler}
            >
              {intendedLearners.map((learner, i) => (
                <MenuItem key={i} value={learner}>
                  {learner}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            sx={{
              width: "100%",
              display: "flex",
              flexFlow: "column",
              gap: 2,
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Access Protocol
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={accessProtocol || ""}
              label="Intended Learners"
              onChange={(e) => setAccessPtorocol(e.target.value)}
            >
              <MenuItem value="Free">Free</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
            </Select>
          </FormControl>

          {accessProtocol === "Paid" && (
            <TextField
              variant="outlined"
              required
              fullWidth
              onChange={(e) => setPrice(e.target.value)}
              label="Add price"
              name="Price"
              value={price || ""}
            />
          )}

          {/* Course thumnail picture */}
          <Typography variant="h6">Select Thumbnail image</Typography>
          <section
            style={{
              height: 200,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 200,
                width: "50%",
                borderRadius: 4,
                border: "1px solid #6B6B6B",
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                backgroundSize: "cover",
                // padding: 8,
              }}
            >
              {previewImg ? (
                <img
                  src={previewImg}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    borderRadius: 4,
                  }}
                  alt="preview image"
                />
              ) : (
                <Typography variant="h6">
                  Selected image will show here
                </Typography>
              )}
            </div>
            <DropZone onDrop={(files) => fileUploaderHandler(files, "img")}>
              {({ getRootProps, getInputProps }) => (
                <section
                  {...getRootProps()}
                  style={{
                    height: 200,
                    width: "48%",
                    borderRadius: 4,
                    border: "2px dashed #6B6B6B",
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <GoCloudUpload size={30} />
                  <input {...getInputProps()} />
                  <Typography variant="h6">Select Thumbnail picture</Typography>
                  <Typography variant="subtitle1">
                    Drag and drop or click to select files
                  </Typography>
                </section>
              )}
            </DropZone>
          </section>

          {/* Preview video upload section */}
          <Typography variant="h6">Select Preview Video</Typography>
          <div
            style={{
              height: 250,
              width: "100%",
              borderRadius: 4,
              border: "1px solid #6B6B6B",
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              backgroundSize: "cover",
              // padding: 8,
            }}
          >
            {previewVid ? (
              <ReactPlayer
                ref={previewVidRef}
                url={previewVid}
                height="100%"
                width="100%"
                style={{
                  objectFit: "cover",
                }}
                controls
              />
            ) : (
              <Typography variant="body1">
                Selected video will show here
              </Typography>
            )}
          </div>
          <DropZone onDrop={(files) => fileUploaderHandler(files, "vid")}>
            {({ getRootProps, getInputProps }) => (
              <section
                {...getRootProps()}
                style={{
                  height: 150,
                  width: "100%",
                  borderRadius: 4,
                  border: "2px dashed #6B6B6B",
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <GoCloudUpload size={30} />
                <input {...getInputProps()} />
                <Typography variant="body1">Select Video</Typography>
                <Typography variant="subtitle1">Drag and drop video</Typography>
              </section>
            )}
          </DropZone>

          {/* module list */}
          {createdModules?.map((module, index) => (
            <ModuleCard
              moduleDetails={{ module, index }}
              initializeDialog={() => initializeDialog(module, index)}
              deleteModule={() => deleteModuleHandler(index)}
              key={index}
            />
          ))}

          {/* Action section */}
          <section
            style={{
              display: "flex",
              gap: 14,
              alignSelf: "flex-end",
              marginTop: 18,
            }}
          >
            <Button
              // disabled
              onClick={addModuleHandler}
              variant="contained"
              sx={{ p: 2 }}
              startIcon={<MdOutlineAddCircle size={24} />}
            >
              New Module
            </Button>
            <Button
              disabled={mode === "edit"}
              onClick={uploadCourseHandler}
              variant="contained"
              sx={{ p: 2 }}
              startIcon={<FaUpload size={24} />}
            >
              {mode === "edit" ? "Edit Course" : "Upload"}
            </Button>
          </section>
        </FormControl>

        {/* Module dialog */}
        <ModuleDialog
          ref={dialogRef}
          dialogOpen={dialogOpen}
          closeDialog={() => setDialogOpen(false)}
        />
      </Box>
    </ModuleContext.Provider>
  );
}

export default CreateCourse;
