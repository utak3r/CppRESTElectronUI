set VISUAL=c:\Program Files\Microsoft Visual Studio\2022\Community
set CMAKE=c:\Users\piotr\devel\CMake\bin
set BOOST=C:\Users\piotr\devel\Boost\boost_1_87_0
set INSTALL_DIR=c:\Users\piotr\devel\sandbox\CppRESTElectronUI\server

call "%VISUAL%\Common7\Tools\VsDevCmd.bat"
set PATH=%CMAKE%;%BOOST%;%PATH%

mkdir build
cd build
cmake -Wno-dev -G "Visual Studio 17 2022" -A x64 -DBOOST_DIR:PATH="%BOOST%" -DCMAKE_BINARY_DIR:PATH="." -DCMAKE_INSTALL_PREFIX:PATH="%INSTALL_DIR%" -DCMAKE_CONFIGURATION_TYPES:STRING="Debug;Release" ..
pause