module.exports = {
  // 可选类型
  types: [
    { value: '✨新增', name: '✨新增:    新的内容' },
    { value: '🐛修复', name: '🐛修复:    修复一个Bug' },
    { value: '📝文档', name: '📝文档:    变更文档' },
    { value: '💄格式', name: '💄格式:    空格, 分号等格式修复' },
    { value: '♻️重构', name: '♻️重构:     代码重构，注意和特性、修复区分开' },
    { value: '⚡️性能', name: '⚡️性能:     提升性能' },
    { value: '✅测试', name: '✅测试:    添加一个测试' },
    { value: '🔧工具', name: '🔧工具:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪回滚', name: '⏪回滚:    代码回退' }
  ],
  scopes: [
    { name: 'rchart' },
    { name: 'rhooks' },
    { name: 'rcomponent' },
    { name: 'rule' },
    { name: 'utils' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n)'
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ["特性", "修复"],
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72
};
