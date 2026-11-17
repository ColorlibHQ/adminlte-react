/**
 * Inline script that applies the persisted colour mode to `<html data-bs-theme>`
 * before first paint, so dark-mode visitors never see a light flash.
 *
 * Render it in `<head>` of the root layout (and add `suppressHydrationWarning` to
 * `<html>`, because the script sets an attribute React did not render):
 *
 *   <script dangerouslySetInnerHTML={{ __html: colorModeInitScript }} />
 *
 * It reads the same `lte-theme` localStorage key `ColorModeProvider` writes
 * (`'light' | 'dark' | 'auto'`, `auto` follows `prefers-color-scheme`).
 */
export const colorModeInitScript = `(function(){try{var m=localStorage.getItem('lte-theme');if(m!=='light'&&m!=='dark')m='auto';var d=m==='dark'||(m==='auto'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-bs-theme',d?'dark':'light')}catch(e){}})()`
