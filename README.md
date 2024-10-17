<div align="center">

![task-cli](https://i.imgur.com/U66gFUH.png)

# github-activity

**Simple**, **fast**, and **zero dependencies** tool to track GitHub user activity from the terminal.

_github-activity is a command-line tool for fetching and displaying recent GitHub activity for a specified user._

</div>

## 💻 Quick start

**First**, make sure you have Node.js installed by running the command:

```bash
node -v
```

If you don't have it installed, you can use the following commands:

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

```bash
# download and install Node.js (you may need to restart the terminal)
nvm install 20
```

```bash
## verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`
```

```bash
# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```

**Second**, to install the tool you need to clone this repository, this will create a folder whenever you use the
command:

```bash
git clone https://github.com/luisgarciasv/github-activity.git
cd github-activity
```

After that, you need to install the tool to be used globally:

```bash
## this will create a symlink globally, allowing you to use the `github-activity` command 
## from anywhere in your terminal. you may need to use sudo with this command.
npm link
```

## ⌨️ Commands & Options

### `github-activity <username>`

Fetches and displays recent GitHub activity for the specified username.

```bash
github-activity luisgarciasv
## Output: Recent activity for user luisgarciasv
```

### `github-activity <username> <# of events>`

Fetches and displays a specified number of recent GitHub activities for the specified username.

```bash
github-activity luisgarciasv 5
## Output: Recent 5 activities for user luisgarciasv
```

## ⭐️ Acknowledgement

This project is part of the [Roadmap.sh Project Ideas](https://roadmap.sh/projects) -
<https://roadmap.sh/projects/github-user-activity>
