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
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #e2c784
		'--color-primary-50': '251 247 237', // #fbf7ed
		'--color-primary-100': '249 244 230', // #f9f4e6
		'--color-primary-200': '248 241 224', // #f8f1e0
		'--color-primary-300': '243 233 206', // #f3e9ce
		'--color-primary-400': '235 216 169', // #ebd8a9
		'--color-primary-500': '226 199 132', // #e2c784
		'--color-primary-600': '203 179 119', // #cbb377
		'--color-primary-700': '170 149 99', // #aa9563
		'--color-primary-800': '136 119 79', // #88774f
		'--color-primary-900': '111 98 65', // #6f6241
		// secondary | #dc6990
		'--color-secondary-50': '250 233 238', // #fae9ee
		'--color-secondary-100': '248 225 233', // #f8e1e9
		'--color-secondary-200': '246 218 227', // #f6dae3
		'--color-secondary-300': '241 195 211', // #f1c3d3
		'--color-secondary-400': '231 150 177', // #e796b1
		'--color-secondary-500': '220 105 144', // #dc6990
		'--color-secondary-600': '198 95 130', // #c65f82
		'--color-secondary-700': '165 79 108', // #a54f6c
		'--color-secondary-800': '132 63 86', // #843f56
		'--color-secondary-900': '108 51 71', // #6c3347
		// tertiary | #185565
		'--color-tertiary-50': '220 230 232', // #dce6e8
		'--color-tertiary-100': '209 221 224', // #d1dde0
		'--color-tertiary-200': '197 213 217', // #c5d5d9
		'--color-tertiary-300': '163 187 193', // #a3bbc1
		'--color-tertiary-400': '93 136 147', // #5d8893
		'--color-tertiary-500': '24 85 101', // #185565
		'--color-tertiary-600': '22 77 91', // #164d5b
		'--color-tertiary-700': '18 64 76', // #12404c
		'--color-tertiary-800': '14 51 61', // #0e333d
		'--color-tertiary-900': '12 42 49', // #0c2a31
		// success | #d13975
		'--color-success-50': '248 225 234', // #f8e1ea
		'--color-success-100': '246 215 227', // #f6d7e3
		'--color-success-200': '244 206 221', // #f4cedd
		'--color-success-300': '237 176 200', // #edb0c8
		'--color-success-400': '223 116 158', // #df749e
		'--color-success-500': '209 57 117', // #d13975
		'--color-success-600': '188 51 105', // #bc3369
		'--color-success-700': '157 43 88', // #9d2b58
		'--color-success-800': '125 34 70', // #7d2246
		'--color-success-900': '102 28 57', // #661c39
		// warning | #f80ac5
		'--color-warning-50': '254 218 246', // #fedaf6
		'--color-warning-100': '254 206 243', // #fecef3
		'--color-warning-200': '253 194 241', // #fdc2f1
		'--color-warning-300': '252 157 232', // #fc9de8
		'--color-warning-400': '250 84 214', // #fa54d6
		'--color-warning-500': '248 10 197', // #f80ac5
		'--color-warning-600': '223 9 177', // #df09b1
		'--color-warning-700': '186 8 148', // #ba0894
		'--color-warning-800': '149 6 118', // #950676
		'--color-warning-900': '122 5 97', // #7a0561
		// error | #daeb0e
		'--color-error-50': '249 252 219', // #f9fcdb
		'--color-error-100': '248 251 207', // #f8fbcf
		'--color-error-200': '246 250 195', // #f6fac3
		'--color-error-300': '240 247 159', // #f0f79f
		'--color-error-400': '229 241 86', // #e5f156
		'--color-error-500': '218 235 14', // #daeb0e
		'--color-error-600': '196 212 13', // #c4d40d
		'--color-error-700': '164 176 11', // #a4b00b
		'--color-error-800': '131 141 8', // #838d08
		'--color-error-900': '107 115 7', // #6b7307
		// surface | #213b5a
		'--color-surface-50': '222 226 230', // #dee2e6
		'--color-surface-100': '211 216 222', // #d3d8de
		'--color-surface-200': '200 206 214', // #c8ced6
		'--color-surface-300': '166 177 189', // #a6b1bd
		'--color-surface-400': '100 118 140', // #64768c
		'--color-surface-500': '33 59 90', // #213b5a
		'--color-surface-600': '30 53 81', // #1e3551
		'--color-surface-700': '25 44 68', // #192c44
		'--color-surface-800': '20 35 54', // #142336
		'--color-surface-900': '16 29 44' // #101d2c
	}
};
