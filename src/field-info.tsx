
import {FieldApi } from '@tanstack/react-form';
// FieldInfo component to display validation messages and state

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
    return (
      <>
        {field.state.meta.touchedErrors ? (
          <em className='text-sm text-red-800'>{field.state.meta.touchedErrors.join(', ')}</em>
        ) : null}
        {field.state.meta.isValidating ? 'Validating...' : null}
      </>
    );
  }