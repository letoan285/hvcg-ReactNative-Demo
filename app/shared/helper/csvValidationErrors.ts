import { getString } from 'src/presentation/theme/localization';
import { csvTypeFiles } from 'src/shared/constants';

interface IProps<T> {
  file: T;
  csvName: string;
  isErrorCheck?: boolean;
  requiredColumns: string[];
  template: string[];
  [key: string]: any;
}
interface FileResult {
  fileName: string;
  name: string;
  fileType: string;
  fileSize: number;
  result: any[];
}
const isCsvFileError = (fileResult: FileResult): string | undefined => {
  let message: string | undefined;
  if (!csvTypeFiles.includes(fileResult.fileType)) {
    return getString('text.requiredCsvValidation');
  }
  return message;
};
const checkRowsRequiredValidation = (
  requiredArray: string[],
  result: any[],
  csvName: string
): any => {
  const checkRowsRequireErrorMessages: string[] = [];
  result.forEach((rows: any, index: number) => {
    // eslint-disable-next-line
    for (const [key, value] of Object.entries(rows)) {
      if (requiredArray.includes(key)) {
        if (!value) {
          checkRowsRequireErrorMessages.push(
            getString('text.requiredRowsValidation', {
              column: key,
              name: csvName,
              row: index + 1,
            })
          );
        }
      }
    }
  });

  return checkRowsRequireErrorMessages;
};

const checkTemplatesValidation = (csvTemplate: string[], result: any[]) => {
  const checkTemplatesErrorMessages: string[] = [];
  const col = result[0];
  if (col) {
    csvTemplate.forEach((cols: any) => {
      if (col[cols] === undefined) {
        checkTemplatesErrorMessages.push(
          getString('text.requiredColumnValidation', { column: cols })
        );
      }
    });
  }
  return checkTemplatesErrorMessages;
};

const csvValidationErrors = (props: IProps<any>): string[] => {
  let errors: string[] = [];
  if (props.file.errorFileMessage === 'Delimiter') {
    errors = [...errors, getString('text.missingHeaderFile')];
    props.template.forEach((cols: any) => {
      errors.push(getString('text.requiredColumnValidation', { column: cols }));
    });
  }
  if (props.file.fileSize > 0) {
    const csvFileError = isCsvFileError(props.file);
    if (csvFileError) {
      errors.push(csvFileError);
    } else {
      const headerRequiredErrors = checkTemplatesValidation(
        props.template,
        props.file.result
      );
      const fieldRequiredValidation = checkRowsRequiredValidation(
        props.requiredColumns,
        props.file.result,
        props.csvName
      );

      if (headerRequiredErrors.length) {
        errors = [...errors, ...headerRequiredErrors];
      }
      if (fieldRequiredValidation.length) {
        errors = [...errors, ...fieldRequiredValidation];
      }
    }
  }
  return errors;
};
export default csvValidationErrors;
