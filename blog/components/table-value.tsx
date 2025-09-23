/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';

// 这里改成导出函数
export const createTable = (spanning?: boolean): React.ReactNode => (
  <table style={{ marginLeft: 20, borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      {spanning ? (
        <tr>
          <th
            colSpan={4}
            style={{
              textAlign: 'left',
              border: '1px solid #ccc',
              padding: '4px',
            }}
          >
            <strong>Plugin</strong>
          </th>
        </tr>
      ) : (
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '4px' }}>
            <strong>Plugin</strong>
          </th>
          <th style={{ border: '1px solid #ccc', padding: '4px' }}>
            <strong>Element</strong>
          </th>
          <th style={{ border: '1px solid #ccc', padding: '4px' }}>
            <strong>Inline</strong>
          </th>
          <th style={{ border: '1px solid #ccc', padding: '4px' }}>
            <strong>Void</strong>
          </th>
        </tr>
      )}
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>
          <strong>Heading</strong>
        </td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}></td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}></td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>No</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>
          <strong>Image</strong>
        </td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>Yes</td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>No</td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>Yes</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>
          <strong>Mention</strong>
        </td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>Yes</td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>Yes</td>
        <td style={{ border: '1px solid #ccc', padding: '4px' }}>Yes</td>
      </tr>
    </tbody>
  </table>
);

// 如果还需要 tableValue/ta
