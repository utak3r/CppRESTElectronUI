#pragma once

class SystemInfo
{
public:
	SystemInfo();
	~SystemInfo();
	void getSystemInfo();

public:
	DWORDLONG totalPhysMem;
	DWORDLONG availPhysMem;
	double cpuUsage;

private:
	void initPdhQuery();
};


