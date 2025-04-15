import SysGauge from "./SysGauge.tsx";
import axios from 'axios';
import * as React from "react";

/**
 * This is a JSON structure returned from a backend server.
 */
interface SystemInfo {
    AvailablePhysicalMemory: number;
    TotalPhysicalMemory: number;
    CPUusage: number;
}

/**
 * Properties of a SysInfo component.
 */
interface SysInfoProps {
    id: string,
    apiUrl: string,
    apiEndPoint: string,
    interval: number
}

/**
 * Current state of a component.
 * This component is self-updating, using a timer!
 */
interface SysInfoState {
    sytemInfo: SystemInfo;
    ramTotal: number;
    ramFree: number;
    ramUsed: number;
    ramUsedPercentage: number;
    cpuUsage: number;
}
class SysInfo extends React.Component<SysInfoProps, SysInfoState> {

    /**
     * Default values for initialization.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            systemInfo: {
                AvailablePhysicalMemory: 32000000,
                TotalPhysicalMemory: 32000000,
                CPUusage: 0
            },
            ramTotal: 32000000,
            ramFree: 32000000,
            ramUsed: 0,
            ramUsedPercentage: 0
        }
        //console.log('SysInfo props:', this.props);
        //console.log('SysInfo state:', this.state);
    }

    componentDidMount() {
        this.interval = setInterval(this.getSysInfo, this.props.interval);
    }

    /**
     * Get data from http request and update component's state.
     */
    getSysInfo = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        axios.get<SystemInfo>(`${this.props.apiUrl}${this.props.apiEndPoint}`, config)
            .then((response) => {
                const data: SystemInfo = response.data;
                this.setState({
                    systemInfo: data,
                        cpuUsage: data.CPUusage,
                        ramTotal: data.TotalPhysicalMemory,
                        ramFree: data.AvailablePhysicalMemory,
                        ramUsed: data.TotalPhysicalMemory - data.AvailablePhysicalMemory,
                        ramUsedPercentage: (data.TotalPhysicalMemory - data.AvailablePhysicalMemory) / data.TotalPhysicalMemory * 100
                },
                this.render)
            })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        //console.log('Render method. Current state:', this.state);
        return (
            <div className="flex-container">
                <div className="flex-child">
                    <SysGauge
                        id={"CPUGauge"}
                        value={this.state.cpuUsage}
                        label={"CPU"}
                    />
                </div>
                <div className="flex-child">
                    <SysGauge
                        id={"RAMGauge"}
                        value={this.state.ramUsedPercentage}
                        label={"RAM"}
                    />
                </div>
            </div>
        )
    }

}

export default SysInfo;