/**
 * title: 城市
 * desc: 城市地图
 */

import { AreaMap, AreaMapConfig } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    fetch('https://geo.datav.aliyun.com/areas_v3/bound/320100_full.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }, []);

  const config: AreaMapConfig = {
    map: {
      type: 'mapbox',
      style: 'blank',
      zoom: 3,
      pitch: 0
    },

    source: {
      data: data,
      parser: {
        type: 'geojson'
      }
    },
    autoFit: true,
    color: {
      field: 'childrenNum',
      value: [
        'rgb(239,243,255)',
        'rgb(189,215,231)',
        'rgb(107,174,214)',
        'rgb(49,130,189)',
        'rgb(8,81,156)'
      ],
      scale: {
        type: 'quantile'
      }
    },
    style: {
      opacity: 1,
      stroke: 'rgb(93,112,146)',
      lineWidth: 0.6,
      lineOpacity: 1
    },
    state: {
      active: true
    },
    label: {
      visible: true,
      field: 'name',
      style: {
        fill: '#000',
        opacity: 0.8,
        fontSize: 10,
        stroke: '#fff',
        strokeWidth: 1.5,
        textAllowOverlap: false,
        padding: [5, 5]
      }
    },

    zoom: {
      position: 'bottomright'
    },
    legend: {
      position: 'bottomleft'
    }
  };
  return <AreaMap {...config} containerStyle={{ height: '500px' }} />;
};
