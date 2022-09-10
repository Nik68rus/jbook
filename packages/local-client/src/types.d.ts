declare module 'monaco-jsx-highlighter';
declare module '*.module.css';
declare module '*.module.scss' {
  const content: Record<string, string | undefined>;
  export default content;
}