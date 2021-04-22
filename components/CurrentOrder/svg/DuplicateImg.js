import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function DuplicateImg() {
  const svgimg = `<svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0291 14.0273H11.4432V10.4778C11.4432 10.0257 11.0725 9.65869 10.6157 9.65869C10.1589 9.65869 9.78818 10.0257 9.78818 10.4778V14.0273H6.20226C5.74547 14.0273 5.37474 14.3943 5.37474 14.8464C5.37474 15.2997 5.74547 15.6656 6.20226 15.6656H9.78818V19.2151C9.78818 19.6683 10.1589 20.0342 10.6157 20.0342C11.0725 20.0342 11.4432 19.6683 11.4432 19.2151V15.6656H15.0291C15.4859 15.6656 15.8567 15.2997 15.8567 14.8464C15.8567 14.3943 15.4859 14.0273 15.0291 14.0273ZM18.2294 20.0342C18.2294 21.241 17.2408 22.2185 16.0227 22.2185H5.20972C3.99051 22.2185 3.003 21.241 3.003 20.0342V9.65873C3.003 8.45299 3.99051 7.47442 5.20972 7.47442H16.0227C17.2408 7.47442 18.2294 8.45299 18.2294 9.65873V20.0342ZM16.0227 5.29008H5.20971C2.77128 5.29008 0.796265 7.24613 0.796265 9.6587V20.0342C0.796265 22.4468 2.77128 24.4028 5.20971 24.4028H16.0227C18.46 24.4028 20.4361 22.4468 20.4361 20.0342V9.6587C20.4361 7.24613 18.46 5.29008 16.0227 5.29008ZM21.7873 0.102905H10.9743C8.72788 0.102905 6.8941 1.77062 6.61715 3.91996H8.84705C9.0953 2.98181 9.9493 2.2872 10.9743 2.2872H21.7873C23.0054 2.2872 23.994 3.26468 23.994 4.4715V14.8469C23.994 15.9762 23.1245 16.8947 22.0135 17.0083V19.1926C24.3426 19.0746 26.2007 17.183 26.2007 14.8469V4.4715C26.2007 2.05894 24.2246 0.102905 21.7873 0.102905Z" fill="#AAAAAA"/><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="25"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0291 14.0273H11.4432V10.4778C11.4432 10.0257 11.0725 9.65869 10.6157 9.65869C10.1589 9.65869 9.78818 10.0257 9.78818 10.4778V14.0273H6.20226C5.74547 14.0273 5.37474 14.3943 5.37474 14.8464C5.37474 15.2997 5.74547 15.6656 6.20226 15.6656H9.78818V19.2151C9.78818 19.6683 10.1589 20.0342 10.6157 20.0342C11.0725 20.0342 11.4432 19.6683 11.4432 19.2151V15.6656H15.0291C15.4859 15.6656 15.8567 15.2997 15.8567 14.8464C15.8567 14.3943 15.4859 14.0273 15.0291 14.0273ZM18.2294 20.0342C18.2294 21.241 17.2408 22.2185 16.0227 22.2185H5.20972C3.99051 22.2185 3.003 21.241 3.003 20.0342V9.65873C3.003 8.45299 3.99051 7.47442 5.20972 7.47442H16.0227C17.2408 7.47442 18.2294 8.45299 18.2294 9.65873V20.0342ZM16.0227 5.29008H5.20971C2.77128 5.29008 0.796265 7.24613 0.796265 9.6587V20.0342C0.796265 22.4468 2.77128 24.4028 5.20971 24.4028H16.0227C18.46 24.4028 20.4361 22.4468 20.4361 20.0342V9.6587C20.4361 7.24613 18.46 5.29008 16.0227 5.29008ZM21.7873 0.102905H10.9743C8.72788 0.102905 6.8941 1.77062 6.61715 3.91996H8.84705C9.0953 2.98181 9.9493 2.2872 10.9743 2.2872H21.7873C23.0054 2.2872 23.994 3.26468 23.994 4.4715V14.8469C23.994 15.9762 23.1245 16.8947 22.0135 17.0083V19.1926C24.3426 19.0746 26.2007 17.183 26.2007 14.8469V4.4715C26.2007 2.05894 24.2246 0.102905 21.7873 0.102905Z" fill="white"/></mask><g mask="url(#mask0)"></g></svg>`

  const DuplicateSvg = () => <SvgXml xml={svgimg} width='25.4' height='24.3' />

  return <DuplicateSvg />
}