import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// 准备翻译的语言环境信息
const messages = {
  en: {
    input: {
      select: 'Select your Emoji',
      input: 'Input Commit message',
      copy: 'copy',
      success: 'Copied!',
      error: 'Emoji must be select!'
    },
    art: {
      name: 'art',
      description: 'Improving structure / format of the code.'
    },
    zap: {
      name: 'zap',
      description: 'Improving performance.'
    },
    fire: {
      name: 'fire',
      description: 'Removing code or files.'
    },
    bug: {
      name: 'bug',
      description: 'Fixing a bug.'
    },
    ambulance: {
      name: 'ambulance',
      description: 'Critical hotfix.'
    },
    sparkles: {
      name: 'sparkles',
      description: 'Introducing new features.'
    },
    pencil: {
      name: 'pencil',
      description: 'Fixing typos.'
    },
    rocket: {
      name: 'rocket',
      description: 'Deploying stuff.'
    },
    lipstick: {
      name: 'lipstick',
      description: 'Updating the UI and style files.'
    },
    tada: {
      name: 'tada',
      description: 'Initial commit.'
    },
    'white-check-mark': {
      name: 'white-check-mark',
      description: 'Updating tests.'
    },
    lock: {
      name: 'lock',
      description: 'Fixing security issues.'
    },
    apple: {
      name: 'apple',
      description: 'Fixing something on macOS.'
    },
    penguin: {
      name: 'penguin',
      description: 'Fixing something on Linux.'
    },
    'checkered-flag': {
      name: 'checkered-flag',
      description: 'Fixing something on Windows.'
    },
    robot: {
      name: 'robot',
      description: 'Fixing something on Android.'
    },
    'green-apple': {
      name: 'green-apple',
      description: 'Fixing something on iOS.'
    },
    bookmark: {
      name: 'bookmark',
      description: 'Releasing / Version tags.'
    },
    'rotating-light': {
      name: 'rotating-light',
      description: 'Removing linter warnings.'
    },
    construction: {
      name: 'construction',
      description: 'Work in progress.'
    },
    'green-heart': {
      name: 'green-heart',
      description: 'Fixing CI Build.'
    },
    'arrow-down': {
      name: 'arrow-down',
      description: 'Downgrading dependencies.'
    },
    'arrow-up': {
      name: 'arrow-up',
      description: 'Upgrading dependencies.'
    },
    pushpin: {
      name: 'pushpin',
      description: 'Pinning dependencies to specific versions.'
    },
    'construction-worker': {
      name: 'construction-worker',
      description: 'Adding CI build system.'
    },
    'chart-with-upwards-trend': {
      name: 'chart-with-upwards-trend',
      description: 'Adding analytics or tracking code.'
    },
    recycle: {
      name: 'recycle',
      description: 'Refactoring code.'
    },
    whale: {
      name: 'whale',
      description: 'Work about Docker.'
    },
    'heavy-plus-sign': {
      name: 'heavy-plus-sign',
      description: 'Adding a dependency.'
    },
    'heavy-minus-sign': {
      name: 'heavy-minus-sign',
      description: 'Removing a dependency.'
    },
    wrench: {
      name: 'wrench',
      description: 'Changing configuration files.'
    },
    'globe-with-meridians': {
      name: 'globe-with-meridians',
      description: 'Internationalization and localization.'
    },
    poop: {
      name: 'poop',
      description: 'Writing bad code that needs to be improved.'
    },
    rewind: {
      name: 'rewind',
      description: 'Reverting changes.'
    },
    'twisted-rightwards-arrows': {
      name: 'twisted-rightwards-arrows',
      description: 'Merging branches.'
    },
    package: {
      name: 'package',
      description: 'Updating compiled files or packages.'
    },
    alien: {
      name: 'alien',
      description: 'Updating code due to external API changes.'
    },
    truck: {
      name: 'truck',
      description: 'Moving or renaming files.'
    },
    'page-facing-up': {
      name: 'page-facing-up',
      description: 'Adding or updating license.'
    },
    boom: {
      name: 'boom',
      description: 'Introducing breaking changes.'
    },
    bento: {
      name: 'bento',
      description: 'Adding or updating assets.'
    },
    'ok-hand': {
      name: 'ok-hand',
      description: 'Updating code due to code review changes.'
    },
    wheelchair: {
      name: 'wheelchair',
      description: 'Improving accessibility.'
    },
    bulb: {
      name: 'bulb',
      description: 'Documenting source code.'
    },
    beers: {
      name: 'beers',
      description: 'Writing code drunkenly.'
    },
    'speech-balloon': {
      name: 'speech-balloon',
      description: 'Updating text and literals.'
    },
    'card-file-box': {
      name: 'card-file-box',
      description: 'Performing database related changes.'
    },
    'loud-sound': {
      name: 'loud-sound',
      description: 'Adding logs.'
    },
    mute: {
      name: 'mute',
      description: 'Removing logs.'
    },
    'busts-in-silhouette': {
      name: 'busts-in-silhouette',
      description: 'Adding contributor(s).'
    },
    'children-crossing': {
      name: 'children-crossing',
      description: 'Improving user experience / usability.'
    },
    'building-construction': {
      name: 'building-construction',
      description: 'Making architectural changes.'
    },
    iphone: {
      name: 'iphone',
      description: 'Working on responsive design.'
    },
    'clown-face': {
      name: 'clown-face',
      description: 'Mocking things.'
    },
    egg: {
      name: 'egg',
      description: 'Adding an easter egg.'
    },
    'see-no-evil': {
      name: 'see-no-evil',
      description: 'Adding or updating a .gitignore file'
    },
    'camera-flash': {
      name: 'camera-flash',
      description: 'Adding or updating snapshots'
    },
    alembic: {
      name: 'alembic',
      description: 'Experimenting new things'
    },
    mag: {
      name: 'mag',
      description: 'Improving SEO'
    },
    'wheel-of-dharma': {
      name: 'wheel-of-dharma',
      description: 'Work about Kubernetes'
    },
    label: {
      name: 'label',
      description: 'Adding or updating types (Flow, TypeScript)'
    }
  },
  zh_CN: {
    input: {
      select: '选择 Emoji',
      input: '输入 Commit message',
      copy: '复制',
      success: '复制成功！',
      error: 'Emoji 是必选项，请选择~'
    },
    art: {
      name: 'art',
      description: '优化代码的结构或格式'
    },
    zap: {
      name: 'zap',
      description: '优化性能'
    },
    fire: {
      name: 'fire',
      description: '移除了代码或文件'
    },
    bug: {
      name: 'bug',
      description: '修复 Bug'
    },
    ambulance: {
      name: 'ambulance',
      description: '热修复'
    },
    sparkles: {
      name: 'sparkles',
      description: '加入了新功能'
    },
    pencil: {
      name: 'pencil',
      description: '修复拼写错误'
    },
    rocket: {
      name: 'rocket',
      description: '执行部署'
    },
    lipstick: {
      name: 'lipstick',
      description: '优化样式 UI'
    },
    tada: {
      name: 'tada',
      description: '初始化提交'
    },
    'white-check-mark': {
      name: 'white-check-mark',
      description: '更新测试'
    },
    lock: {
      name: 'lock',
      description: '修复安全问题'
    },
    apple: {
      name: 'apple',
      description: '修复在 MacOS 上的问题'
    },
    penguin: {
      name: 'penguin',
      description: '修复在 Linux 上的问题'
    },
    'checkered-flag': {
      name: 'checkered-flag',
      description: '修复在 Windows 上的问题'
    },
    robot: {
      name: 'robot',
      description: '修复在 Android 上的问题'
    },
    'green-apple': {
      name: 'green-apple',
      description: '修复在 iOS 上的问题'
    },
    bookmark: {
      name: 'bookmark',
      description: '发布版本或标签'
    },
    'rotating-light': {
      name: 'rotating-light',
      description: '移除 linter 警告'
    },
    construction: {
      name: 'construction',
      description: '未完成，工作进行中'
    },
    'green-heart': {
      name: 'green-heart',
      description: '修复 CI 构建'
    },
    'arrow-down': {
      name: 'arrow-down',
      description: '降级依赖'
    },
    'arrow-up': {
      name: 'arrow-up',
      description: '升级依赖'
    },
    pushpin: {
      name: 'pushpin',
      description: '将依赖项固定到特定版本'
    },
    'construction-worker': {
      name: 'construction-worker',
      description: '添加 CI 构建集成'
    },
    'chart-with-upwards-trend': {
      name: 'chart-with-upwards-trend',
      description: '添加分析或更新代码'
    },
    recycle: {
      name: 'recycle',
      description: '重构代码'
    },
    whale: {
      name: 'whale',
      description: 'docker 相关工作'
    },
    'heavy-plus-sign': {
      name: 'heavy-plus-sign',
      description: '添加依赖'
    },
    'heavy-minus-sign': {
      name: 'heavy-minus-sign',
      description: '移除依赖'
    },
    wrench: {
      name: 'wrench',
      description: '更改配置文件'
    },
    'globe-with-meridians': {
      name: 'globe-with-meridians',
      description: '国际化和本地化相关'
    },
    poop: {
      name: 'poop',
      description: '提交的代码需要改进'
    },
    rewind: {
      name: 'rewind',
      description: '代码回退'
    },
    'twisted-rightwards-arrows': {
      name: 'twisted-rightwards-arrows',
      description: '合并分支代码'
    },
    package: {
      name: 'package',
      description: '升级编译文件或包'
    },
    alien: {
      name: 'alien',
      description: '由于外部 API 更改而更新代码'
    },
    truck: {
      name: 'truck',
      description: '移除或重命名文件'
    },
    'page-facing-up': {
      name: 'page-facing-up',
      description: '添加或更新 license'
    },
    boom: {
      name: 'boom',
      description: '引入破坏性更新'
    },
    bento: {
      name: 'bento',
      description: '添加或更新静态资源'
    },
    'ok-hand': {
      name: 'ok-hand',
      description: '更新在 code review 中发现的问题'
    },
    wheelchair: {
      name: 'wheelchair',
      description: '改进可访问性'
    },
    bulb: {
      name: 'bulb',
      description: '记录源代码'
    },
    beers: {
      name: 'beers',
      description: '迷迷糊糊写代码'
    },
    'speech-balloon': {
      name: 'speech-balloon',
      description: '更新文案'
    },
    'card-file-box': {
      name: 'card-file-box',
      description: '数据库相关更改'
    },
    'loud-sound': {
      name: 'loud-sound',
      description: '添加日志'
    },
    mute: {
      name: 'mute',
      description: '移除日志'
    },
    'busts-in-silhouette': {
      name: 'busts-in-silhouette',
      description: '添加协作者'
    },
    'children-crossing': {
      name: 'children-crossing',
      description: '改善用户体验或可用性'
    },
    'building-construction': {
      name: 'building-construction',
      description: '进行架构的变更'
    },
    iphone: {
      name: 'iphone',
      description: '响应式设计相关'
    },
    'clown-face': {
      name: 'clown-face',
      description: 'Mock 相关'
    },
    egg: {
      name: 'egg',
      description: '偷偷添加菜单'
    },
    'see-no-evil': {
      name: 'see-no-evil',
      description: '添加或更新了 .gitignore'
    },
    'camera-flash': {
      name: 'camera-flash',
      description: '添加或更新了 snapshots'
    },
    alembic: {
      name: 'alembic',
      description: '实验性功能'
    },
    mag: {
      name: 'mag',
      description: '改善 SEO'
    },
    'wheel-of-dharma': {
      name: 'wheel-of-dharma',
      description: 'k8s 相关'
    },
    label: {
      name: 'label',
      description: '添加或更新类型声明(如 Flow，TypeScript)'
    }
  }
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;
