# C++ REST server and Electron client app

This was made only to see, how to join forces of two different worlds: RESTful server written in C++ (using Boost) and an Electron app, written in Javascript.

Electron App is probably not the best one in the world, this is my first time I've written anything in Javascript, not to mention Electron.

The app does pretty much nothing, except for showing current RAM usage and CPU usage.

## How to build it

### C++ server

Enter `server` subdirectory and run cmake. You can use included `configure.cmd` but only after you adjust the paths inside. If you configure it for Visual Studio, just build the solution.

The outcome is a single exe file. If you run it, it will open a 8080 port and start listening.

The url to get the system info is `http://localhost:8080/api/system`.

### Electron client

It's in `client` subdirectory. It has some `.vscode` files for easy building and running and debugging. 

There's a catch though: I'm currently trying to make it to copy additional resources automatically during a build, but so far I'm failing. So, if you build an executable to run it natively (without electron-forge), you will have to copy the `client\public\images` directory to `client\out\electronapp-win32-x64\resources`.

![img](https://github.com/utak3r/CppRESTElectronUI/blob/main/screenshot.png?raw=true)
