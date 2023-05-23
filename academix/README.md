# **ACADEMIX**

Academix is a user-friendly and interactive learning management system (LMS) developed for organization's internship group. It leverages essential technology, including web3 capabilities, in such a way that the specific needs of learners are met.


<br />
<hr />

# **Tools and Technologies**
UI - [React](https://react.dev/), [Material UI](https://mui.com/material-ui/)

Data Management - [Socket](https://socket.io/)

Authentication - [Auth0](https://auth0.com/docs)

<br />
<hr/>

# **Workflow**

## Cloning the repository:

1. Clone the repo to your local machine.

   ```bash
   # starting in a directory of your choice
   cd ~/repos

   # clone your fork of the repository
   git clone <repository-url>
   ```

2. Keep your clone up-to-date often.
   You can do this by fetching the latest changes from the project repository by pulling from the main branch to your clone.

   ```bash
   cd ~/repos/academix

   # Pull the local clone's main branch
   git pull origin main
   ```



## Installing and running the project

1.  To set up the site locally, you need to have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.
You can check if these are installed by running the following commands:

    ```bash
    node -v
    yarn -v
    ```

2. After you have installed Node.js and Yarn, change into the project's folder if you have not and install the project's dependencies by runing `yarn` 

    ```bash
    cd <project-folder-path>
    yarn
    ```
3. Start the local server by runing :

    ```bash
    yarn start
    ```


    Once started, a live preview is available at `http://localhost:3000/`

    Set your preferred editor by adding `EDITOR=...` into a `.env` file in the project root.
    To specify VS Code as your preferred editor, for example, use the following command on your terminal:

    ```bash
    echo 'EDITOR=code' >> .env
    ```
    You can set the `EDITOR` environment variable to any editor you like.


## Editing files and tracking changes in git

 Note: Please before you start editing files or making changes make sure to pull first on the branch you are working on

1. Create a branch for your changes.
   This example creates a branch named `fix-typo`:

   ```bash
   cd ~/repos/academix

   # create a new branch named fix-typo
   git checkout -b fix-typo
   ```

2. Make Your Changes: Make the necessary modifications, additions, or fixes to the project codebase using your preferred code editor or IDE.

3. Commit Your Changes: Once you've made your changes, commit them to your local branch with descriptive commit messages. Only track and commit file that you created and worked on, do not add module folders
    ```bash
    git add .

    # create a new branch named fix-typo
    git commit -m "Your commit message"
    ```

4. Keep Your Branch Up-to-date: Periodically pull the latest changes from the main repository's branch to ensure your branch is up-to-date with the latest code.
    ```bash
    git pull origin <main_branch>
    ```
5. Push Your Branch: Push your local branch to the remote repository.
    ```bash
    git push origin <branch_name>
    ```
6. Create a Pull Request: Now, visit the project's repository on GitHub and navigate to the "Pull Requests" section. Create a new pull request by selecting your branch as the source and the develop project branch as the target.

**Caution:** <br/> 
- Provide a screenshoot of the UI you are working on and a clear title and description for your pull request, explaining the changes you've made and their purpose.
- all console.log, unused variables and commented out codes must be removed before you push.
- Check into the develop branch and pull before you checkout into your own branch, do not on any account make any push or commit to develop or main branch. All push or commit should be made to your own branch.
- choose your own branch names that describes what you worked on and add a prefix to it.
    - feat : when it is a new feature (e.g feat/buttonComponent)
    - fix: when you are making fixes to a particular feature (e.g fix/loginTextEdit)
    - refact: when you are making a refactor
- Only track and commit file that you created and worked on, do not add module folders.


<br/>

# **FOLDER STRUCTURE**

### **Naming convention**

  All files and folder - Camelcase (e.g button, courseDetails) <br/> Image files - snake case (e.g profile_pic.jpeg, background_image.jpeg)

<br />

### **Folder description**
- Assets - stores images. it should be named using snake_case, and should be sorted in two forms:
  - svg: to hold all svgs
  - images: to hold all other image types that are not svgs.


- Components - are used to store all reusable components with its styles used in the app.

- context - are used to store data that will ne re-used through the application.

- features - 

- hooks -

- Pages are where each pages are found and  should be named using camelCase.

- service -

- Styles - It's used to store all global styles and theme


- Utils (folder) used to store all functions that are reusable round the app.

