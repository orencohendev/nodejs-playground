# Section Three

In this section, we begin writing an actual app. It's the first app of the course called the Notes App.
I will separate the actual app code from this folder and include mostly writings in this file and maybe other important snippets of data.

## The require operation.
To write stuff to the filesystem, we use a module called fs (short for file system). The problem is that it's not globally available like `console`.
So, to "import" modules that we want to use, we need to define them at the top of the file using the require function like so:

```
const NAME_OF_REF_TO_MODULE = require('NAME_OF_MODULE')
```

That will give us a reference that we can use throughout the file.

## Writing to file
Writing to file is used by writeFileSync (for now as we will move to async later), like so:

```
fs.writeFileSync("notes.txt", "This file was created by NodeJS!")
```

If the file doesn't exist, it will be created. If the file does exist, it will be overriden.

## Appending to file
Appending to an existing file can be achieved by using appendFileSync like so:

```
fs.appendFileSync("notes.txt", "This message was appended using appendFileSync!")
```

Appending to file does not start a new line. If we want to start a new line, we should include `\n` at the beginning of our string.

## Require an existing JS file
Running an app all in one file is not ideal. Some code will have to go to different files for clarity.
To include code from other files we require them at the top of our main file using a contextual path like so:

```
require('./utils.js')
```

This will make sure the utils file will be loaded before the rest of the app.js file is loaded.

## Exporting from module scope
When creating a separate module, the file needs to define what it exports at the bottom of the file. This can be done using the command `module.exports = NAME_OF_EXPORT`

Here's an example:

```
const name = "Module"
module.exports = name
```

Now, when someone imports that module into their file and prints it, they'll get "Module" as the printed value.

## Defining a function
Functions in JS are pretty straightforward. You can define one like so:

```
const add = (a, b) => {
    return a + b
}
```

And then using exports makes more sense by exporting that function like so:

```
module.exports = add
```

Now it can be 'imported' to a different file(s) and used there.

## Importing 3rd-party modules
In NodeJS, we need to use the npm package manager to install 3rd-party packages.

### Initializing project
We can initialize a project using the following command in the root folder of the project:
```
npm init
```

### Adding 3rd-party packages. 
We can search for the package we want on [npmjs.com](https://npmjs.com) and then install it via the following command:

```
npm install PACKAGE_NAME
```

We need to make sure to do this in the root of the project where package.json is located.

### Adding a specific version of a package
Using the @ sign and the specific version you need, you can install specific versions of packages from npm:

```
npm install package_name@2.4.1
```

### Reinstalling the node_modules folder
That folder shouldn't be committed to git since it will be re-installed from the lock file when we use `npm install` in the root of the project before using it.