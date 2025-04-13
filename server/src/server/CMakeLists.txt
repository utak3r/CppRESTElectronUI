
add_executable(RestfulApi 
	main.cpp
	)

include_directories(
	${CMAKE_SOURCE_DIR}/src/systeminfo
	${Boost_INCLUDE_DIRS}
)

target_link_libraries(RestfulApi 
	systeminfo
	${Boost_LIBRARIES}
)
