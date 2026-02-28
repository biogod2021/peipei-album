# Implementation Plan: 岁月的注脚

## Phase 1: 深度视觉调研与交互式编排 (Discovery & Inquiry)
- [~] Task: 逐文件夹深度视觉盘点。
    - [~] 系统性读取所有照片，捕捉每段旅程中的细微情感变化（如：眼神交汇、重复出现的物件）。
- [ ] Task: 交互式叙事访谈。
    - [ ] 针对调研中发现的关键瞬间（例如：支教时的某个抓拍、某次平凡午餐的背景），向用户发起针对性询问，挖掘背后的故事。
- [ ] Task: 基于反馈确立最终编排与 `src/narrative_config.js`。
    - [ ] 整合视觉发现与用户回复，最终锁定篇章划分、镜像对比点及文案底稿。
- [ ] Task: 编写配置验证测试。
- [ ] Task: Conductor - User Manual Verification 'Phase 1' (Protocol in workflow.md)

## Phase 2: 页面结构与渲染逻辑 (Core Implementation)
- [ ] Task: 重构 `index.html` 以支持篇章化渲染。
    - [ ] 使用 Handlebars 模板生成基于篇章的 DOM 结构。
- [ ] Task: 编写渲染逻辑单元测试。
- [ ] Task: 实现 `main.js` 中的篇章切换监听。
- [ ] Task: Conductor - User Manual Verification 'Phase 2' (Protocol in workflow.md)

## Phase 3: 视觉修饰与动效 (Polish & Interaction)
- [ ] Task: 实现“温和淡入”的文字组件。
- [ ] Task: 实现第一章的“岁月复写”镜像布局。
- [ ] Task: 优化全站图片占位符，防止滚动跳动。
- [ ] Task: Conductor - User Manual Verification 'Phase 3' (Protocol in workflow.md)

## Phase 4: 最终审查 (Final Validation)
- [ ] Task: 手机真机调试，确保交互顺滑。
- [ ] Task: 最终叙事流完整性检查。
- [ ] Task: Conductor - User Manual Verification 'Phase 4' (Protocol in workflow.md)
