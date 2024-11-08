import CopyButton from '@/config/CopyButton';
import './global.scss';
import { code, code2 } from './config/code';

function Common() {
  return (
    <>
      <div className='commonBox'>
        <h6 className='title'>Button</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='300px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type='button' className='mainBtn'>
                    버튼
                  </button>
                </td>
                <td>
                  <code>{code}</code>
                  <CopyButton code={code} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='commonBox'>
        <h6 className='title'>Input</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='300px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type='text' placeholder='내용입력' />
                </td>
                <td>
                  <code>{code2}</code>
                  <CopyButton code={code2} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Common;
