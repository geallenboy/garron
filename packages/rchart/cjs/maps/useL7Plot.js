"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useL7Plot;

var _util = require("@antv/util");

var _react = require("react");

var _util2 = require("../util");

function useL7Plot(Ctor, config) {
  const plotRef = (0, _react.useRef)();
  const plotConfig = (0, _react.useRef)();
  const containerRef = (0, _react.useRef)(null);
  const {
    onReady
  } = config;
  (0, _react.useEffect)(() => {
    if (!plotRef.current || !plotConfig.current || (0, _util.isEqual)(plotConfig.current, config)) return;
    let changeData = false;
    let updateMap = false;
    let updateOption = false;
    const {
      onReady: currentOnReady,
      map: currentMap,
      source: {
        data: currentSourceData,
        ...currentSourceConfig
      },
      ...currentConfig
    } = plotConfig.current;
    const {
      onReady,
      map: inputMap,
      source: {
        data: inputSourceData,
        ...inputSourceDataConfig
      },
      ...inputConfig
    } = config;
    updateMap = !(0, _util.isEqual)(currentMap, inputMap);
    changeData = !(0, _util.isEqual)(currentSourceConfig, inputSourceDataConfig) || currentSourceData !== inputSourceData;
    updateOption = !(0, _util.isEqual)(currentConfig, inputConfig);
    plotConfig.current = (0, _util2.deepCloneMapConfig)(config);

    if (updateMap) {
      const updateMapConfig = (0, _util.pick)(inputMap, ['center', 'pitch', 'rotation', 'zoom', 'style']);
      plotRef.current.updateMap(updateMapConfig);
    }

    if (changeData) {
      if (plotRef.current.loaded) {
        plotRef.current.changeData(inputSourceData, inputSourceDataConfig);
      } else {
        plotRef.current.once('loaded', () => {
          var _plotRef$current;

          (_plotRef$current = plotRef.current) === null || _plotRef$current === void 0 ? void 0 : _plotRef$current.changeData(inputSourceData, inputSourceDataConfig);
        });
      }
    }

    if (updateOption) {
      if (plotRef.current.loaded) {
        plotRef.current.update(inputConfig);
      } else {
        plotRef.current.once('loaded', () => {
          var _plotRef$current2;

          (_plotRef$current2 = plotRef.current) === null || _plotRef$current2 === void 0 ? void 0 : _plotRef$current2.update(inputConfig);
        });
      }
    }
  }, [config]);
  (0, _react.useEffect)(() => {
    if (!containerRef.current) {
      return () => null;
    }

    if (!plotConfig.current) {
      plotConfig.current = (0, _util2.deepCloneMapConfig)(config);
    }

    plotRef.current = new Ctor(containerRef.current, { ...config
    });

    if (onReady) {
      plotRef.current.once('loaded', () => {
        onReady(plotRef.current);
      });
    } // 组件销毁时销毁图表


    return () => {
      if (plotRef.current) {
        plotRef.current.destroy();
        plotRef.current = undefined;
      }
    };
  }, []);
  return {
    plotRef,
    containerRef
  };
}