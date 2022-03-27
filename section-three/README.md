# Section Three

In this section, we begin writing an actual app. It's the first app of the course called the Notes App.
I will separate the actual app code from this folder and include mostly writings in this file and maybe other important snippets of data.

## The require operation.
To write stuff to the filesystem, we use a module called fs (short for file system). The problem is that it's not globally available as `console`.
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