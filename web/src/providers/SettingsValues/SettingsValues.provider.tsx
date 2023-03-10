import {noop} from 'lodash';
import {createContext, useCallback, useContext, useEffect, useMemo} from 'react';

import {useGetDataStoresQuery, useGetConfigQuery, useGetPollingQuery} from 'redux/apis/TraceTest.api';
import {useAppDispatch, useAppSelector} from 'redux/hooks';
import {setUserPreference} from 'redux/slices/User.slice';
import DataStoreConfig from 'models/DataStoreConfig.model';
import Config from 'models/Config.model';
import UserSelectors from 'selectors/User.selectors';
import AnalyticsService from 'services/Analytics/Analytics.service';
import {ConfigMode} from 'types/DataStore.types';
import Env from 'utils/Env';
import Polling from 'models/Polling.model';

interface IContext {
  dataStoreConfig: DataStoreConfig;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  skipConfigSetup(): void;
  skipConfigSetupFromTest(): void;
  shouldDisplayConfigSetup: boolean;
  shouldDisplayConfigSetupFromTest: boolean;
  config: Config;
  polling: Polling;
}

const Context = createContext<IContext>({
  dataStoreConfig: DataStoreConfig([]),
  skipConfigSetup: noop,
  skipConfigSetupFromTest: noop,
  isLoading: false,
  isFetching: false,
  isError: false,
  shouldDisplayConfigSetup: false,
  shouldDisplayConfigSetupFromTest: false,
  config: Config(),
  polling: Polling(),
});

interface IProps {
  children: React.ReactNode;
}

export const useSettingsValues = () => useContext(Context);

const SettingsValuesProvider = ({children}: IProps) => {
  // DataStore
  const dispatch = useAppDispatch();
  const {data: dataStoreConfig = DataStoreConfig([]), isLoading, isError, isFetching} = useGetDataStoresQuery({});
  const initConfigSetup = useAppSelector(state => UserSelectors.selectUserPreference(state, 'initConfigSetup'));
  const initConfigSetupFromTest = useAppSelector(state =>
    UserSelectors.selectUserPreference(state, 'initConfigSetupFromTest')
  );

  const shouldDisplayConfigSetup = !!initConfigSetup && dataStoreConfig.mode === ConfigMode.NO_TRACING_MODE;
  const shouldDisplayConfigSetupFromTest =
    !!initConfigSetupFromTest && dataStoreConfig.mode === ConfigMode.NO_TRACING_MODE;

  const skipConfigSetup = useCallback(() => {
    dispatch(
      setUserPreference({
        key: 'initConfigSetup',
        value: false,
      })
    );
  }, [dispatch]);

  const skipConfigSetupFromTest = useCallback(() => {
    dispatch(
      setUserPreference({
        key: 'initConfigSetupFromTest',
        value: false,
      })
    );
  }, [dispatch]);

  // Config
  const {data: config = Config()} = useGetConfigQuery({});

  useEffect(() => {
    Env.set('analyticsEnabled', config.analyticsEnabled);
    AnalyticsService.load();
    AnalyticsService.identify();
  }, [config]);

  // Polling
  const {data: polling = Polling()} = useGetPollingQuery({});

  const value = useMemo<IContext>(
    () => ({
      dataStoreConfig,
      isLoading,
      isFetching,
      isError,
      skipConfigSetup,
      skipConfigSetupFromTest,
      shouldDisplayConfigSetup,
      shouldDisplayConfigSetupFromTest,
      config,
      polling,
    }),
    [
      dataStoreConfig,
      isError,
      isLoading,
      isFetching,
      shouldDisplayConfigSetup,
      shouldDisplayConfigSetupFromTest,
      skipConfigSetup,
      skipConfigSetupFromTest,
      config,
      polling,
    ]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default SettingsValuesProvider;