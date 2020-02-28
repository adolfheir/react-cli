import React, { Component } from 'react';
import google from 'google';
import { debounce } from 'lodash';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { MAP as MAP_CONSTANT } from 'react-google-maps/lib/constants.js';
import { mapCore, mapCaller } from './utils';
import LocalMap from './LocalMap';

class MapCore extends Component {
    defaultoptions = {
        zoom: 12,
        center: { lat: 30.1300123643, lng: 120.0816032474 },
        draggable: true,
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT,
        },
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
        zoomControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        mapTypeControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        disableDoubleClickZoom: true, // 暂时禁用 overlay事件冒泡 不知为啥禁用失败
    };

    constructor(props) {
        super(props);
        this.local = new LocalMap();
        this.ref = React.createRef();
        this.state = {
            hasCreated: false,
            options: this.defaultoptions,
        };
    }

    handleOptionChange = (newOption) => {
        const { options } = this.state;
        this.setState({
            options: { ...options, ...newOption },
        });
    };

    componentDidMount() {
        // 获取map实例
        mapCore.ins = this.ref.current.context[MAP_CONSTANT];
        // 使用本地地图
        mapCaller('setOptions', { mapTypeId: 'localmap', maxZoom: 20 });
    }

    render() {
        const { children, ...props } = this.props;
        const { options, hasCreated } = this.state;
        const { zoom, center, ...others } = options;
        return (
            <GoogleMap
                zoom={zoom}
                center={center}
                ref={this.ref}
                defaultExtraMapTypes={[['localmap', this.local]]}
                defaultMapTypeId={google.maps.MapTypeId.ROADMAP}
                options={others}
                onProjectionChanged={() => {
                    this.setState({ hasCreated: true }); // eslint-disable-line
                    const { onCreated } = this.props;
                    onCreated && onCreated(mapCore.ins);
                }}
                onCenterChanged={debounce(
                    () => {
                        this.handleOptionChange({ center: this.ref.current.getCenter() });
                    },
                    150,
                    { maxWait: 1000 }
                )}
                onZoomChanged={debounce(
                    () => {
                        this.handleOptionChange({ zoom: this.ref.current.getZoom() });
                    },
                    150,
                    { maxWait: 1000 }
                )}
                {...props}>
                {hasCreated ? children : null}
            </GoogleMap>
        );
    }
}

const WithGoogleMapHoc = withGoogleMap(MapCore);

export default (props) => {
    return (
        <WithGoogleMapHoc
            containerElement={<div style={{ height: '100%', width: '100%' }} />}
            mapElement={<div style={{ height: '100%', width: '100%' }} />}
            {...props}
        />
    );
};
