const { removeDuplicationAndSetIndexPage } = require('./utils/uniPagesUtils_commonJs')
global.hotRequire = require('uni-pages-hot-modules')
function exportPagesConfig (pagesJson={}, loader={}) {
    // 初始化uni-pages-hot-modules（输入loader）
    hotRequire(loader)
    // pages的初始配置
    let basePages = []
    // subPackages的初始配置
    let baseSubPackages = []

    // 要输出的pages
    let pages = removeDuplicationAndSetIndexPage(
        [
            ...basePages,
			...hotRequire('./page_modules/index.js'),
			...hotRequire('./page_modules/home.js'),
			...hotRequire('./page_modules/mine.js'),
			...hotRequire('./page_modules/sublevel.js'),
			...hotRequire('./page_modules/classification.js'),
			...hotRequire('./page_modules/404.js'),
			...hotRequire('./page_modules/login.js'),
			...hotRequire('./page_modules/card.js'),
			...hotRequire('./page_modules/popout.js'),
			...hotRequire('./page_modules/store.js'),
        ],
        // 设置首页(可省)
        'pages/entrance/entrance'
    )
	
	// console.log(pages)

    // 要输出的subPackages
    let subPackages = [
        ...baseSubPackages
        // ...hotRequire('./subpackage_modules/index.js')
    ]
	// 输出easycom
	let easycom = {
		autoscan: true,
		custom: {
			...hotRequire('./subunit_modules/index.js'),
			...hotRequire('./subunit_modules/home.js'),
			...hotRequire('./subunit_modules/mine.js'),
			...hotRequire('./subunit_modules/sublevel.js'),
			...hotRequire('./subunit_modules/classification.js'),
			...hotRequire('./subunit_modules/login.js'),
			...hotRequire('./subunit_modules/popout.js'),
			...hotRequire('./subunit_modules/store.js'),
		}
	}
    return {
        // 合并pages.json的初始内容
        ...pagesJson,
        pages,
        subPackages,
		easycom
    }
}

module.exports = exportPagesConfig
