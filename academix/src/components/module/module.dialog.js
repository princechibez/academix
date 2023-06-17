import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { MdOutlineAddCircle } from "react-icons/md";

import ReactPlayer from "react-player";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import Dropzone from "react-dropzone";
import { GoCloudUpload } from "react-icons/go";
import { ModuleContext } from "../instructorDBScreens/createCourse";

const ModuleDialog = forwardRef((props, ref) => {
  const { createdModules, setCreatedModules } = useContext(ModuleContext);
  const [stagedModule, setStagedModule] = useState(null);
  const [stagedModuleIndex, setStagedModuleIndex] = useState(null);

  // useEffect(() => {
  //   console.log(module);
  // }, []);

  // const [currentPreview, setCurrentPreview] = useState(null);

  useImperativeHandle(ref, () => ({
    stageModule({ module, index }) {
      setStagedModule(module);
      setStagedModuleIndex(index);
    },
  }));

  const genBase64 = (file) => {
    const reader = new FileReader();
    const promise = new Promise((resolve, reject) => {
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (err) => reject(err);
    });

    reader.readAsDataURL(file);
    return promise;
  };

  const fileUploaderHandler = async (files, identityIndex) => {
    let overWrittenContents = [...stagedModule.contents];
    let updatedContents = overWrittenContents[identityIndex];

    files.forEach(async (file) => {
      updatedContents.video = await genBase64(file);
      // setCurrentPreview(updatedContents.video);
    });

    overWrittenContents[identityIndex] = updatedContents;
    setStagedModule({ ...stagedModule, contents: overWrittenContents });
  };

  const inputHandler = (event, ID) => {
    setStagedModule({ ...stagedModule, [ID]: event.target.value });
  };

  const lectureInputHandler = (event, lectureIndex, ID) => {
    let updatedContents = [...stagedModule.contents];
    updatedContents[lectureIndex][ID] = event.target.value;
    setStagedModule({ ...stagedModule, contents: updatedContents });
  };

  const addLectureToModule = () => {
    let updatedModule = {
      ...stagedModule,
      contents: [
        ...stagedModule.contents,
        {
          content_title: "",
          content_description: "",
          duration: "",
          video: null,
        },
      ],
    };
    setStagedModule(updatedModule);
  };

  const removeLectureFromModule = (lectureIndex) => {
    let currentContents = [...stagedModule.contents];
    let newContents = currentContents.filter(
      (_, index) => index !== lectureIndex
    );
    const updatedModule = {
      ...stagedModule,
      contents: newContents,
    };
    setStagedModule(updatedModule);
  };

  const updateModuleHandler = () => {
    let updatedModules = createdModules;
    updatedModules[stagedModuleIndex] = stagedModule;
    setCreatedModules(updatedModules);
    return props.closeDialog();
  };

  return (
    <Dialog
      sx={{ overflowY: "scroll", minHeight: "80vh", justifySelf: "flex-start" }}
      open={props.dialogOpen}
      onClose={props.closeDialog}
      fullWidth
    >
      <DialogTitle>Edit this module</DialogTitle>
      <DialogContent>
        <DialogContentText>
          All editions will only affect this module.
        </DialogContentText>
        <Box
          component="form"
          sx={{
            pt: 2,
            height: "100%",
            width: "100%",
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
            // id="search"
            onChange={(e) => inputHandler(e, "title")}
            label="Module title"
            name="Title"
            multiline
            maxRows={2}
            value={stagedModule?.title}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            onChange={(e) => inputHandler(e, "description")}
            label="Module description"
            name="description"
            multiline
            minRows={3}
            value={stagedModule?.description}
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
            {/* Lectures */}
            {stagedModule?.contents.map((content, index) => (
              <section
                key={index}
                style={{
                  //   height: 200,
                  width: "100%",
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{ alignSelf: "flex-start" }}>
                  <Button variant="standard">Lecture {index + 1}</Button>
                  <Button
                    onClick={() => removeLectureFromModule(index)}
                    variant="contained"
                  >
                    Remove Lecture {index + 1}
                  </Button>
                </div>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  // id="search"
                  onChange={(e) =>
                    lectureInputHandler(e, index, "content_title")
                  }
                  label="Lecture title"
                  name="Title"
                  multiline
                  maxRows={2}
                  value={content.content_title}
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={(e) =>
                    lectureInputHandler(e, index, "content_description")
                  }
                  label="Lecture description"
                  name="description"
                  multiline
                  minRows={3}
                  value={content.content_description}
                />
                {/* video */}
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
                  {content.video ? (
                    <ReactPlayer
                      url={content.video}
                      height="100%"
                      width="100%"
                      style={{
                        objectFit: "cover",
                      }}
                      controls
                    />
                  ) : (
                    <Typography variant="body1">
                      The selected lecture video will show here
                    </Typography>
                  )}
                </div>
                <Dropzone onDrop={(files) => fileUploaderHandler(files, index)}>
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
                      <Typography variant="body1">Select lecture Video</Typography>
                      <Typography variant="subtitle1">
                        Drag and drop video
                      </Typography>
                    </section>
                  )}
                </Dropzone>
              </section>
            ))}
            <Button
              onClick={addLectureToModule}
              variant="contained"
              sx={{ p: 2 }}
              startIcon={<MdOutlineAddCircle size={24} />}
            >
              Add Lecture
            </Button>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={updateModuleHandler}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default ModuleDialog;
