import { useState, useRef, useEffect } from 'react';
import loader from '@ibsheet/loader';
import {
  IBSheetCreateOptions,
  IBSheetInstance,
} from '@ibsheet/loader/dist/cjs/lib/ibsheet';

// 타입적으로는 의미가 없지만 해당 타입을 아이비시트에 적용하여 코드의 명확성을 조금이나마 인지시킵니다.
type IBSheetType = any;

interface IBSheetProps extends IBSheetCreateOptions {}

const IBSheetComponent = (props) => {
  const sheetDiv = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<IBSheetType | null>(null);
  const [_sheet, _setSheet] = useState<IBSheetInstance | null>(null);

  useEffect(() => {
    sheetRef.current = _sheet;
  }, [_sheet]);
  useEffect(() => {
    loader
      .createSheet({
        el: sheetDiv.current,
        options: props.options,
        data: props.data ? props.data : [],
      })
      .then((sheet) => {
        _setSheet(sheet);
      });
    return () => {
      loader.removeSheet(sheetRef.current.id);
    };
  }, [props]);

  return (
    <>
      <div
        ref={sheetDiv}
        style={{
          width: props.w ? props.w : '100%',
          height: props.h ? props.h : '600px',
        }}
      />
    </>
  );
};

export default IBSheetComponent;
