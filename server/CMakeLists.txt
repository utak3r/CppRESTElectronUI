cmake_minimum_required(VERSION 3.31)
project(CppREST_server)

set(CMAKE_CXX_STANDARD 17)

set (Boost_INCLUDE_DIRS ${BOOST_DIR})
set(Boost_LIBRARIES ${BOOST_DIR}/stage/lib)

add_subdirectory(src)
