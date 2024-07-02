import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #889c0d
		'--color-primary-50': '237 240 219', // #edf0db
		'--color-primary-100': '231 235 207', // #e7ebcf
		'--color-primary-200': '225 230 195', // #e1e6c3
		'--color-primary-300': '207 215 158', // #cfd79e
		'--color-primary-400': '172 186 86', // #acba56
		'--color-primary-500': '136 156 13', // #889c0d
		'--color-primary-600': '122 140 12', // #7a8c0c
		'--color-primary-700': '102 117 10', // #66750a
		'--color-primary-800': '82 94 8', // #525e08
		'--color-primary-900': '67 76 6', // #434c06
		// secondary | #632451
		'--color-secondary-50': '232 222 229', // #e8dee5
		'--color-secondary-100': '224 211 220', // #e0d3dc
		'--color-secondary-200': '216 200 212', // #d8c8d4
		'--color-secondary-300': '193 167 185', // #c1a7b9
		'--color-secondary-400': '146 102 133', // #926685
		'--color-secondary-500': '99 36 81', // #632451
		'--color-secondary-600': '89 32 73', // #592049
		'--color-secondary-700': '74 27 61', // #4a1b3d
		'--color-secondary-800': '59 22 49', // #3b1631
		'--color-secondary-900': '49 18 40', // #311228
		// tertiary | #38b8d1
		'--color-tertiary-50': '225 244 248', // #e1f4f8
		'--color-tertiary-100': '215 241 246', // #d7f1f6
		'--color-tertiary-200': '205 237 244', // #cdedf4
		'--color-tertiary-300': '175 227 237', // #afe3ed
		'--color-tertiary-400': '116 205 223', // #74cddf
		'--color-tertiary-500': '56 184 209', // #38b8d1
		'--color-tertiary-600': '50 166 188', // #32a6bc
		'--color-tertiary-700': '42 138 157', // #2a8a9d
		'--color-tertiary-800': '34 110 125', // #226e7d
		'--color-tertiary-900': '27 90 102', // #1b5a66
		// success | #6d3250
		'--color-success-50': '233 224 229', // #e9e0e5
		'--color-success-100': '226 214 220', // #e2d6dc
		'--color-success-200': '219 204 211', // #dbccd3
		'--color-success-300': '197 173 185', // #c5adb9
		'--color-success-400': '153 112 133', // #997085
		'--color-success-500': '109 50 80', // #6d3250
		'--color-success-600': '98 45 72', // #622d48
		'--color-success-700': '82 38 60', // #52263c
		'--color-success-800': '65 30 48', // #411e30
		'--color-success-900': '53 25 39', // #351927
		// warning | #88500b
		'--color-warning-50': '237 229 218', // #ede5da
		'--color-warning-100': '231 220 206', // #e7dcce
		'--color-warning-200': '225 211 194', // #e1d3c2
		'--color-warning-300': '207 185 157', // #cfb99d
		'--color-warning-400': '172 133 84', // #ac8554
		'--color-warning-500': '136 80 11', // #88500b
		'--color-warning-600': '122 72 10', // #7a480a
		'--color-warning-700': '102 60 8', // #663c08
		'--color-warning-800': '82 48 7', // #523007
		'--color-warning-900': '67 39 5', // #432705
		// error | #978167
		'--color-error-50': '239 236 232', // #efece8
		'--color-error-100': '234 230 225', // #eae6e1
		'--color-error-200': '229 224 217', // #e5e0d9
		'--color-error-300': '213 205 194', // #d5cdc2
		'--color-error-400': '182 167 149', // #b6a795
		'--color-error-500': '151 129 103', // #978167
		'--color-error-600': '136 116 93', // #88745d
		'--color-error-700': '113 97 77', // #71614d
		'--color-error-800': '91 77 62', // #5b4d3e
		'--color-error-900': '74 63 50', // #4a3f32
		// surface | #351959
		'--color-surface-50': '225 221 230', // #e1dde6
		'--color-surface-100': '215 209 222', // #d7d1de
		'--color-surface-200': '205 198 214', // #cdc6d6
		'--color-surface-300': '174 163 189', // #aea3bd
		'--color-surface-400': '114 94 139', // #725e8b
		'--color-surface-500': '53 25 89', // #351959
		'--color-surface-600': '48 23 80', // #301750
		'--color-surface-700': '40 19 67', // #281343
		'--color-surface-800': '32 15 53', // #200f35
		'--color-surface-900': '26 12 44' // #1a0c2c
	}
};
