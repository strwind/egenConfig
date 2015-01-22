
/**
 * @file 模块信息配置
 * @author yaofeifei(yaofeifei@baidu.com）
 * @date 2014-10-30 
 */
var path = require('path');
var cwd = process.cwd();
var join = path.join;
var config = {
    
    /*
     * 用户信息配置
     * userName 用户姓名
     * email 用户邮箱
     */
    'userInfo': {
        "userName": "yaofeifei",
        "email": "yaofeifei@baidu.com"
    },
    
    /*
     * 模块配置
     * targetPath 生成模块代码的路径
     * tplPath 模块的模板所在路径
     * hasMockup 是否生成mock文件
     * hasCssRef 是否需要添加css引用路径
     * hasConfigRef 是否需要添加config引用路径
     * cssRefTargetPath 模块的css文件需要添加引用的路径
     * configRefTargetPath 模块的config文件需要添加的引用路径
     */
    'module': {
        'targetPath': join(cwd, 'src/biz'),
        'tplPath': join(cwd, 'egenConfig/tpl/mod'),
        'hasMockup': true,
        'hasCssRef': true,
        'hasConfigRef': true,
        'mockupPath': join(cwd, 'test/mockup'),
        'cssRefTargetPath': join(cwd, 'src/css/main.less'),
        'configRefTargetPath': join(cwd, 'src/biz/moduleConfig.js')
    },
    
    /*
     * 控件配置
     * targetPath 生成控件代码的路径
     * tplPath 控件的模板所在路径
     * hasDemo 是否生成mock文件
     * hasCssRef 是否需要添加css引用路径
     * hasDemoRef 是否需要添加demo引用路径
     * cssRefTargetPath 控件的css文件需要添加引用的路径
     * demoPath 控件demo生成的路径
     * demoRefTargetPath 控件demo导航的引用路径
     */
    'control': {
        'targetPath': join(cwd, 'src/ui'),
        'tplPath': join(cwd, 'egenConfig/tpl/ui'),
        'hasDemo': true,
        'hasCssRef': true,
        'hasDemoRef': true,
        'demoPath': join(cwd, 'test/ui/demo'),
        'cssRefTargetPath': join(cwd, 'src/ui/css/ui-all.less'),
        'demoRefTargetPath': join(cwd, 'test/ui/demo/index_nav.html')
    }
};

module.exports = exports = config;
