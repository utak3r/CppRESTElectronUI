add_library(systeminfo STATIC
	systeminfo.cpp
	systeminfo.h
)

target_link_libraries(systeminfo
	pdh.lib
)
