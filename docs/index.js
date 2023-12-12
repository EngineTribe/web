window.$docsify = {
    name: "Engine Tribe",
    nameLink: {
        "/": "/",
        "/es-es/": "/es-es/",
        "/zh-cn/": "/zh-cn/",
    },
    repo: "https://github.com/EngineTribe/EngineTribe",
    loadSidebar: true,
    subMaxLevel: 3,
    loadNavbar: true,
    plugins: [
        function persistTitle(hook, vm) {
            // https://github.com/jhildenbiddle/docsify-themeable/blob/master/docs/index.html#L69
            const titleElm = document.querySelector('title');
            const rootTitle = titleElm && titleElm.textContent;
            const pageTitleSuffix = window.$docsify.name ? ' - ' + window.$docsify.name : '';
            if (rootTitle) {
                hook.doneEach(function () {
                    const currentTitle = titleElm.textContent;
                    const isRoot = !/\/[a-z]/.test(location.hash);
                    titleElm.textContent = (isRoot ? rootTitle : currentTitle + pageTitleSuffix);
                });
            }
        },
        function addPageBottom(hook, vm) {
            hook.afterEach((html) => {
                const currentDocPath = vm.route.file;
                const localizedPageBottoms = {
                    'zh-cn': '<div align="center">2021-2023 由 <a href="https://chyk.ink">斬風 千雪</a> 和引擎部落团队用 💗 创作</div>',
                    'es-es': '<div align="center">2021-2023 Por <a href="https://chyk.ink">Kirikaze Chiyuki</a> y el equipo de Engine Tribe con 💗</div>'
                }
                for (const lang in localizedPageBottoms) {
                    if (currentDocPath.includes(lang)) {
                        return html + localizedPageBottoms[lang];
                    }
                }
                return html + '<div align="center">2021-2023 By <a href="https://chyk.ink">Kirukaze Chiyuki</a> and Engine Tribe team with 💗</div>';
            });
        }
    ],
    fallbackLanguages: ['es-es', 'zh-cn'],

};
