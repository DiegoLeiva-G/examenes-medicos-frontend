import { DatePicker as AntdDatePicker } from 'antd';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';

export const DatePicker = AntdDatePicker.generatePicker<Date>(dateFnsGenerateConfig);
