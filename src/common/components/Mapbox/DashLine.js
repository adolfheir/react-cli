import React, { Component, CSSProperties, Fragment } from 'react';
import classNames from 'classnames';
import * as turf from '@turf/turf';
import { Button } from '@alifd/next';
import { Layer, Source } from 'react-mapbox-gl';
import { mapCaller } from '@common/components/Mapbox/utils';
import Map from '@components/Mapbox';
