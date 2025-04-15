import { GaugeComponent } from 'react-gauge-component';
import * as React from "react";

/**
 * This is a simple repackage and preparation of a react-gauge-component
 * component to be used here. Nothing new.
 */

interface SysGaugeProps {
    id: string,
    label: string,
    value: number
}
interface SysGaugeState {

}
class SysGauge extends React.Component<SysGaugeProps, SysGaugeState> {
    render() {
        return (
            <div>
                <GaugeComponent
                    id={this.props.id}
                    type="radial"
                    arc={{
                        gradient: false,
                        width: 0.2,
                        padding: 0,
                        subArcs: [
                            {
                                limit: 40,
                                color: '#01d301',
                                showTick: true
                            },
                            {
                                limit: 80,
                                color: '#ffb400',
                                showTick: true
                            },
                            {
                                limit: 100,
                                color: '#FF0000',
                                showTick: true
                            },
                            { color: '#FF0000' }
                        ]
                    }}
                    value={this.props.value}
                    pointer={{type: "needle", elastic: true}}
                />
                <p>{this.props.label}</p>
            </div>
        )
    }
}

export default SysGauge;
