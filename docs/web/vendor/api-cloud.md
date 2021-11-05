# ApiCloud 常见问题(FAQ)

## 1. 证书错误

证书生成地址见 : [iOS 证书及描述文件制作流程](https://docs.apicloud.com/Dev-Guide/iOS-License-Application-Guidance#3)

如果证书类型存在错误, 则会出现以下的问题, 这里应该使用开发证书

```
...
note: Using new build system
note: Building targets in parallel
note: Planning build
note: Constructing build description
error: Provisioning profile "Ad-Hoc" doesn't include signing certificate "iPhone Developer: Yufei Li (M5L32Z773W)". (in target 'UZApp' from project 'UZApp')
warning: NewsstandKit is deprecated. (in target 'UZApp' from project 'UZApp')
warning: OpenGLES is deprecated. Consider migrating to Metal instead. (in target 'UZApp' from project 'UZApp')
warning: MobileCoreServices has been renamed. Use CoreServices instead. (in target 'UZApp' from project 'UZApp')
warning: GLKit is deprecated. Consider migrating to MetalKit instead. (in target 'UZApp' from project 'UZApp')
warning: AddressBook is deprecated. Consider migrating to Contacts instead. (in target 'UZApp' from project 'UZApp')
warning: AddressBookUI is deprecated. Consider migrating to ContactsUI instead. (in target 'UZApp' from project 'UZApp')
warning: AssetsLibrary is deprecated. Consider migrating to Photos instead. (in target 'UZApp' from project 'UZApp')

** ARCHIVE FAILED **

** EXPORT FAILED **

error: archive not found at path '/uzmap/temp/UiC1Cw5M31nvsNL/ios/UZApp.xcarchive'
```
