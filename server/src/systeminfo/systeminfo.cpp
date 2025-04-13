#include "windows.h"
#include "Pdh.h"
#include "systeminfo.h"

static PDH_HQUERY cpuQuery;
static PDH_HCOUNTER cpuTotal;

SystemInfo::SystemInfo()
	:
	totalPhysMem(0), 
	availPhysMem(0)
{
	initPdhQuery();
	getSystemInfo();
}

SystemInfo::~SystemInfo()
{
}	

void SystemInfo::initPdhQuery()
{
	PdhOpenQuery(NULL, NULL, &cpuQuery);
	//PdhAddEnglishCounter(cpuQuery, reinterpret_cast<LPCSTR>(L"\\Processor(_Total)\\% Processor Time"), NULL, &cpuTotal);
	PdhAddEnglishCounter(cpuQuery, reinterpret_cast<LPCSTR>("\\Processor Information(*)\\% Processor Time"), NULL, &cpuTotal);
	PdhCollectQueryData(cpuQuery);
}

void SystemInfo::getSystemInfo()
{
	MEMORYSTATUSEX memInfo;
	memInfo.dwLength = sizeof(MEMORYSTATUSEX);
	GlobalMemoryStatusEx(&memInfo);
	
	totalPhysMem = memInfo.ullTotalPhys;
	availPhysMem = memInfo.ullAvailPhys;

	PDH_FMT_COUNTERVALUE counterVal;
	PdhCollectQueryData(cpuQuery);
	PdhGetFormattedCounterValue(cpuTotal, PDH_FMT_DOUBLE, NULL, &counterVal);

	cpuUsage = counterVal.doubleValue;
}
