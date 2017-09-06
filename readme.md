# `SoundFont` -> `Seqin` Node CLI

## Example

The CLI parses the SoundFont file and inserts a JavaScript-friendly version into `baseClass.js` and writing to `output.js`.

### `baseClass.js`

``` javascript
class SoundFontSeqin {
	constructor() {
		this.groups = {{groups}};
	}

	_buildBuffers() {

	}
}
```

### `output.js`

``` javascript
class SoundFontSeqin {
	constructor() {
		this.groups = [
	{
		"regions": [
			{
				"sample": "samples\\As_029__F1_5.wav",
				"volume": "3",
				"lokey": "24",
				"hikey": "32",
				"pitch_keycenter": "29",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "50501",
				"loop_start": "48450",
				"loop_end": "50491"
			},
			{
				"sample": "samples\\As_035__B1_5.wav",
				"volume": "3",
				"lokey": "33",
				"hikey": "37",
				"pitch_keycenter": "35",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "0.5",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "47535",
				"loop_start": "41795",
				"loop_end": "47525"
			},
			{
				"sample": "samples\\As_040__E2_5.wav",
				"volume": "3",
				"lokey": "38",
				"hikey": "42",
				"pitch_keycenter": "40",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "79.9855",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "53868",
				"loop_start": "52792",
				"loop_end": "53858"
			},
			{
				"sample": "samples\\As_045__A2_5.wav",
				"volume": "3",
				"lokey": "43",
				"hikey": "47",
				"pitch_keycenter": "45",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "55.0117",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "23739",
				"loop_start": "23329",
				"loop_end": "23729"
			},
			{
				"sample": "samples\\As_050__D3_5.wav",
				"volume": "3",
				"lokey": "48",
				"hikey": "52",
				"pitch_keycenter": "50",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "39.9928",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "50863",
				"loop_start": "46969",
				"loop_end": "50853"
			},
			{
				"sample": "samples\\As_055__G3_5.wav",
				"volume": "3",
				"lokey": "53",
				"hikey": "57",
				"pitch_keycenter": "55",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "25.0054",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "48409",
				"loop_start": "47727",
				"loop_end": "48399"
			},
			{
				"sample": "samples\\As_059__B3_5.wav",
				"volume": "3",
				"lokey": "58",
				"hikey": "60",
				"pitch_keycenter": "59",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "19.9964",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "65728",
				"loop_start": "64828",
				"loop_end": "65718"
			},
			{
				"sample": "samples\\As_062__D4_5-r-R.wav",
				"lokey": "61",
				"hikey": "63",
				"pitch_keycenter": "62",
				"lovel": "1",
				"hivel": "47",
				"pan": "100",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "16",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "74401",
				"loop_start": "73794",
				"loop_end": "74391"
			},
			{
				"sample": "samples\\As_062__D4_5-L.wav",
				"lokey": "61",
				"hikey": "63",
				"pitch_keycenter": "62",
				"lovel": "1",
				"hivel": "47",
				"pan": "-100",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "16",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "74393",
				"loop_start": "73786",
				"loop_end": "74383"
			},
			{
				"sample": "samples\\As_065__F4_5.wav",
				"volume": "3",
				"lokey": "64",
				"hikey": "68",
				"pitch_keycenter": "65",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "12.0003",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "60681",
				"loop_start": "60167",
				"loop_end": "60671"
			},
			{
				"sample": "samples\\As_071__B4_5.wav",
				"volume": "3",
				"lokey": "69",
				"hikey": "73",
				"pitch_keycenter": "71",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "69764",
				"loop_start": "69310",
				"loop_end": "69754"
			},
			{
				"sample": "samples\\As_076__E5_5.wav",
				"volume": "3",
				"lokey": "74",
				"hikey": "78",
				"pitch_keycenter": "76",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "54501",
				"loop_start": "54292",
				"loop_end": "54491"
			},
			{
				"sample": "samples\\As_081__A5_5.wav",
				"volume": "3",
				"lokey": "79",
				"hikey": "83",
				"pitch_keycenter": "81",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "77875",
				"loop_start": "77416",
				"loop_end": "77865"
			},
			{
				"sample": "samples\\As_086__D6_5.wav",
				"volume": "3",
				"lokey": "84",
				"hikey": "88",
				"pitch_keycenter": "86",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "78155",
				"loop_start": "77659",
				"loop_end": "78145"
			},
			{
				"sample": "samples\\As_091__G6_5.wav",
				"volume": "3",
				"lokey": "89",
				"hikey": "93",
				"pitch_keycenter": "91",
				"lovel": "1",
				"hivel": "47",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "49979",
				"loop_start": "49634",
				"loop_end": "49969"
			},
			{
				"sample": "samples\\As_096__C7_5.wav",
				"volume": "3",
				"lokey": "94",
				"hikey": "103",
				"pitch_keycenter": "96",
				"lovel": "1",
				"hivel": "47",
				"ampeg_release": "0.300062",
				"offset": "0",
				"end": "99266",
				"loop_start": "0",
				"loop_end": "0"
			}
		],
		"lokey": "0",
		"hikey": "127",
		"lovel": "0",
		"hivel": "127",
		"loop_mode": "no_loop",
		"ampeg_attack": "0.001",
		"amplfo_freq": "8.176",
		"fillfo_freq": "8.176",
		"pitchlfo_freq": "8.176",
		"fil_type": "lpf_2p",
		"cutoff": "19914"
	},
	{
		"regions": [
			{
				"sample": "samples\\As_029__F1_4.wav",
				"volume": "3",
				"lokey": "24",
				"hikey": "32",
				"pitch_keycenter": "29",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "45819",
				"loop_start": "43783",
				"loop_end": "45809"
			},
			{
				"sample": "samples\\As_035__B1_4.wav",
				"volume": "3",
				"lokey": "33",
				"hikey": "37",
				"pitch_keycenter": "35",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "2",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "87657",
				"loop_start": "84784",
				"loop_end": "87647"
			},
			{
				"sample": "samples\\As_040__E2_4.wav",
				"volume": "3",
				"lokey": "38",
				"hikey": "42",
				"pitch_keycenter": "40",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "79.9855",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "77249",
				"loop_start": "75642",
				"loop_end": "77239"
			},
			{
				"sample": "samples\\As_045__A2_4.wav",
				"volume": "3",
				"lokey": "43",
				"hikey": "47",
				"pitch_keycenter": "45",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "55.0117",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "58578",
				"loop_start": "57369",
				"loop_end": "58568"
			},
			{
				"sample": "samples\\As_050__D3_4.wav",
				"volume": "3",
				"lokey": "48",
				"hikey": "52",
				"pitch_keycenter": "50",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "39.9928",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "55390",
				"loop_start": "54185",
				"loop_end": "55380"
			},
			{
				"sample": "samples\\As_055__G3_4.wav",
				"volume": "3",
				"lokey": "53",
				"hikey": "57",
				"pitch_keycenter": "55",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "2",
				"ampeg_decay": "25.0054",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "59850",
				"loop_start": "58718",
				"loop_end": "59840"
			},
			{
				"sample": "samples\\As_059__B3_4.wav",
				"volume": "3",
				"lokey": "58",
				"hikey": "60",
				"pitch_keycenter": "59",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "2.49955",
				"ampeg_decay": "19.9964",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "92551",
				"loop_start": "91650",
				"loop_end": "92541"
			},
			{
				"sample": "samples\\As_062__D4_4.wav",
				"volume": "3",
				"lokey": "61",
				"hikey": "63",
				"pitch_keycenter": "62",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "2.49955",
				"ampeg_decay": "16",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "113834",
				"loop_start": "112927",
				"loop_end": "113824"
			},
			{
				"sample": "samples\\As_065__F4_4.wav",
				"volume": "3",
				"lokey": "64",
				"hikey": "68",
				"pitch_keycenter": "65",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "4",
				"ampeg_decay": "12.0003",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "183879",
				"loop_start": "182860",
				"loop_end": "183869"
			},
			{
				"sample": "samples\\As_071__B4_4.wav",
				"volume": "3",
				"lokey": "69",
				"hikey": "73",
				"pitch_keycenter": "71",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "4",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "179005",
				"loop_start": "178284",
				"loop_end": "178995"
			},
			{
				"sample": "samples\\As_076__E5_4.wav",
				"volume": "3",
				"lokey": "74",
				"hikey": "78",
				"pitch_keycenter": "76",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "2.30005",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "102761",
				"loop_start": "102419",
				"loop_end": "102751"
			},
			{
				"sample": "samples\\As_081__A5_4.wav",
				"volume": "3",
				"lokey": "79",
				"hikey": "83",
				"pitch_keycenter": "81",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "3.00008",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "139667",
				"loop_start": "139358",
				"loop_end": "139657"
			},
			{
				"sample": "samples\\As_086__D6_4.wav",
				"volume": "3",
				"lokey": "84",
				"hikey": "88",
				"pitch_keycenter": "86",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "3.00008",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "142313",
				"loop_start": "142117",
				"loop_end": "142303"
			},
			{
				"sample": "samples\\As_091__G6_4.wav",
				"volume": "3",
				"lokey": "89",
				"hikey": "93",
				"pitch_keycenter": "91",
				"lovel": "48",
				"hivel": "72",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"offset": "0",
				"end": "196259",
				"loop_start": "0",
				"loop_end": "0"
			},
			{
				"sample": "samples\\As_096__C7_4.wav",
				"volume": "3",
				"lokey": "94",
				"hikey": "103",
				"pitch_keycenter": "96",
				"lovel": "48",
				"hivel": "72",
				"ampeg_release": "0.300062",
				"offset": "0",
				"end": "108058",
				"loop_start": "0",
				"loop_end": "0"
			}
		],
		"lokey": "0",
		"hikey": "127",
		"lovel": "0",
		"hivel": "127",
		"loop_mode": "no_loop",
		"ampeg_attack": "0.001",
		"amplfo_freq": "8.176",
		"fillfo_freq": "8.176",
		"pitchlfo_freq": "8.176",
		"fil_type": "lpf_2p",
		"cutoff": "19914"
	},
	{
		"regions": [
			{
				"sample": "samples\\As_029__F1_3.wav",
				"volume": "3",
				"lokey": "24",
				"hikey": "32",
				"pitch_keycenter": "29",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "4.50023",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "196637",
				"loop_start": "192559",
				"loop_end": "196627"
			},
			{
				"sample": "samples\\As_035__B1_3.wav",
				"volume": "3",
				"lokey": "33",
				"hikey": "37",
				"pitch_keycenter": "35",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "2.49955",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "104925",
				"loop_start": "102770",
				"loop_end": "104915"
			},
			{
				"sample": "samples\\As_040__E2_3.wav",
				"volume": "3",
				"lokey": "38",
				"hikey": "42",
				"pitch_keycenter": "40",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "2.19999",
				"ampeg_decay": "79.9855",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "95028",
				"loop_start": "93422",
				"loop_end": "95018"
			},
			{
				"sample": "samples\\As_045__A2_3.wav",
				"volume": "3",
				"lokey": "43",
				"hikey": "47",
				"pitch_keycenter": "45",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "55.0117",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "69017",
				"loop_start": "67807",
				"loop_end": "69007"
			},
			{
				"sample": "samples\\As_050__D3_3.wav",
				"volume": "3",
				"lokey": "48",
				"hikey": "52",
				"pitch_keycenter": "50",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "2.30005",
				"ampeg_decay": "39.9928",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "101438",
				"loop_start": "100232",
				"loop_end": "101428"
			},
			{
				"sample": "samples\\As_055__G3_3.wav",
				"volume": "3",
				"lokey": "53",
				"hikey": "57",
				"pitch_keycenter": "55",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "3.00008",
				"ampeg_decay": "25.0054",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "129738",
				"loop_start": "128604",
				"loop_end": "129728"
			},
			{
				"sample": "samples\\As_059__B3_3.wav",
				"volume": "3",
				"lokey": "58",
				"hikey": "60",
				"pitch_keycenter": "59",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "19.9964",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "129761",
				"loop_start": "128682",
				"loop_end": "129751"
			},
			{
				"sample": "samples\\As_062__D4_3.wav",
				"volume": "3",
				"lokey": "61",
				"hikey": "63",
				"pitch_keycenter": "62",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "2.49955",
				"ampeg_decay": "16",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "143681",
				"loop_start": "142774",
				"loop_end": "143671"
			},
			{
				"sample": "samples\\As_065__F4_3.wav",
				"volume": "3",
				"lokey": "64",
				"hikey": "68",
				"pitch_keycenter": "65",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "4",
				"ampeg_decay": "12.0003",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "162272",
				"loop_start": "161631",
				"loop_end": "162262"
			},
			{
				"sample": "samples\\As_071__B4_4.wav",
				"volume": "3",
				"lokey": "69",
				"hikey": "73",
				"pitch_keycenter": "71",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "179005",
				"loop_start": "178284",
				"loop_end": "178995"
			},
			{
				"sample": "samples\\As_076__E5_4.wav",
				"volume": "3",
				"lokey": "74",
				"hikey": "78",
				"pitch_keycenter": "76",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "2.30005",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "102761",
				"loop_start": "102419",
				"loop_end": "102751"
			},
			{
				"sample": "samples\\As_081__A5_4.wav",
				"volume": "3",
				"lokey": "79",
				"hikey": "83",
				"pitch_keycenter": "81",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "3.00008",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "139667",
				"loop_start": "139358",
				"loop_end": "139657"
			},
			{
				"sample": "samples\\As_086__D6_4.wav",
				"volume": "3",
				"lokey": "84",
				"hikey": "88",
				"pitch_keycenter": "86",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "3.00008",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "142313",
				"loop_start": "142117",
				"loop_end": "142303"
			},
			{
				"sample": "samples\\As_091__G6_4.wav",
				"volume": "3",
				"lokey": "89",
				"hikey": "93",
				"pitch_keycenter": "91",
				"lovel": "73",
				"hivel": "95",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"offset": "0",
				"end": "196259",
				"loop_start": "0",
				"loop_end": "0"
			},
			{
				"sample": "samples\\As_096__C7_4.wav",
				"volume": "3",
				"lokey": "94",
				"hikey": "103",
				"pitch_keycenter": "96",
				"lovel": "73",
				"hivel": "95",
				"ampeg_release": "0.300062",
				"offset": "0",
				"end": "108058",
				"loop_start": "0",
				"loop_end": "0"
			}
		],
		"lokey": "0",
		"hikey": "127",
		"lovel": "0",
		"hivel": "127",
		"loop_mode": "no_loop",
		"ampeg_attack": "0.001",
		"amplfo_freq": "8.176",
		"fillfo_freq": "8.176",
		"pitchlfo_freq": "8.176",
		"fil_type": "lpf_2p",
		"cutoff": "19914"
	},
	{
		"regions": [
			{
				"sample": "samples\\As_029__F1_2.wav",
				"volume": "3",
				"lokey": "24",
				"hikey": "32",
				"pitch_keycenter": "29",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "6.00016",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "264128",
				"loop_start": "261070",
				"loop_end": "264118"
			},
			{
				"sample": "samples\\As_035__B1_2.wav",
				"volume": "3",
				"lokey": "33",
				"hikey": "37",
				"pitch_keycenter": "35",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "3.20058",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "142067",
				"loop_start": "139201",
				"loop_end": "142057"
			},
			{
				"sample": "samples\\As_040__E2_2.wav",
				"volume": "3",
				"lokey": "38",
				"hikey": "42",
				"pitch_keycenter": "40",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "2.80079",
				"ampeg_decay": "79.9855",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "123401",
				"loop_start": "121795",
				"loop_end": "123391"
			},
			{
				"sample": "samples\\As_045__A2_2.wav",
				"volume": "3",
				"lokey": "43",
				"hikey": "47",
				"pitch_keycenter": "45",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "3.4007",
				"ampeg_decay": "55.0117",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "148330",
				"loop_start": "147122",
				"loop_end": "148320"
			},
			{
				"sample": "samples\\As_050__D3_2.wav",
				"volume": "3",
				"lokey": "48",
				"hikey": "52",
				"pitch_keycenter": "50",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "2.7007",
				"ampeg_decay": "39.9928",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "117358",
				"loop_start": "116152",
				"loop_end": "117348"
			},
			{
				"sample": "samples\\As_055__G3_2.wav",
				"volume": "3",
				"lokey": "53",
				"hikey": "57",
				"pitch_keycenter": "55",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "2.19999",
				"ampeg_decay": "25.0054",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "144364",
				"loop_start": "143456",
				"loop_end": "144354"
			},
			{
				"sample": "samples\\As_059__B3_2.wav",
				"volume": "3",
				"lokey": "58",
				"hikey": "60",
				"pitch_keycenter": "59",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "2.19999",
				"ampeg_decay": "19.9964",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "97396",
				"loop_start": "96494",
				"loop_end": "97386"
			},
			{
				"sample": "samples\\As_062__D4_2.wav",
				"volume": "3",
				"lokey": "61",
				"hikey": "63",
				"pitch_keycenter": "62",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "4",
				"ampeg_decay": "16",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "186221",
				"loop_start": "185613",
				"loop_end": "186211"
			},
			{
				"sample": "samples\\As_065__F4_2.wav",
				"volume": "3",
				"lokey": "64",
				"hikey": "68",
				"pitch_keycenter": "65",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "4",
				"ampeg_decay": "12.0003",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "181402",
				"loop_start": "180636",
				"loop_end": "181392"
			},
			{
				"sample": "samples\\As_071__B4_2.wav",
				"volume": "3",
				"lokey": "69",
				"hikey": "73",
				"pitch_keycenter": "71",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "4",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "178238",
				"loop_start": "177695",
				"loop_end": "178228"
			},
			{
				"sample": "samples\\As_076__E5_2.wav",
				"volume": "3",
				"lokey": "74",
				"hikey": "78",
				"pitch_keycenter": "76",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "4",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "166970",
				"loop_start": "166361",
				"loop_end": "166960"
			},
			{
				"sample": "samples\\As_081__A5_2.wav",
				"volume": "3",
				"lokey": "79",
				"hikey": "83",
				"pitch_keycenter": "81",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "4",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "189678",
				"loop_start": "188870",
				"loop_end": "189668"
			},
			{
				"sample": "samples\\As_086__D6_2.wav",
				"volume": "3",
				"lokey": "84",
				"hikey": "88",
				"pitch_keycenter": "86",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "4",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "170274",
				"loop_start": "169591",
				"loop_end": "170264"
			},
			{
				"sample": "samples\\As_091__G6_2.wav",
				"volume": "3",
				"lokey": "89",
				"hikey": "93",
				"pitch_keycenter": "91",
				"lovel": "96",
				"hivel": "111",
				"ampeg_hold": "2",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "86495",
				"loop_start": "86122",
				"loop_end": "86485"
			},
			{
				"sample": "samples\\As_096__C7_2.wav",
				"volume": "3",
				"lokey": "94",
				"hikey": "103",
				"pitch_keycenter": "96",
				"lovel": "96",
				"hivel": "111",
				"ampeg_release": "0.300062",
				"offset": "0",
				"end": "108099",
				"loop_start": "0",
				"loop_end": "0"
			}
		],
		"lokey": "0",
		"hikey": "127",
		"lovel": "0",
		"hivel": "127",
		"loop_mode": "no_loop",
		"ampeg_attack": "0.001",
		"amplfo_freq": "8.176",
		"fillfo_freq": "8.176",
		"pitchlfo_freq": "8.176",
		"fil_type": "lpf_2p",
		"cutoff": "19914"
	},
	{
		"regions": [
			{
				"sample": "samples\\As_029__F1_1.wav",
				"volume": "3",
				"lokey": "24",
				"hikey": "32",
				"pitch_keycenter": "29",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "7.0007",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "322448",
				"loop_start": "319390",
				"loop_end": "322438"
			},
			{
				"sample": "samples\\As_035__B1_1.wav",
				"volume": "3",
				"lokey": "33",
				"hikey": "37",
				"pitch_keycenter": "35",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "6.00016",
				"ampeg_decay": "100.022",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "265510",
				"loop_start": "263354",
				"loop_end": "265500"
			},
			{
				"sample": "samples\\As_040__E2_1.wav",
				"volume": "3",
				"lokey": "38",
				"hikey": "42",
				"pitch_keycenter": "40",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "4.50023",
				"ampeg_decay": "79.9855",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "199757",
				"loop_start": "198150",
				"loop_end": "199747"
			},
			{
				"sample": "samples\\As_045__A2_1.wav",
				"volume": "3",
				"lokey": "43",
				"hikey": "47",
				"pitch_keycenter": "45",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "4",
				"ampeg_decay": "55.0117",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "162531",
				"loop_start": "160521",
				"loop_end": "162521"
			},
			{
				"sample": "samples\\As_050__D3_1.wav",
				"volume": "3",
				"lokey": "48",
				"hikey": "52",
				"pitch_keycenter": "50",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "4",
				"ampeg_decay": "39.9928",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "180601",
				"loop_start": "179395",
				"loop_end": "180591"
			},
			{
				"sample": "samples\\As_055__G3_1.wav",
				"volume": "3",
				"lokey": "53",
				"hikey": "56",
				"pitch_keycenter": "55",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "3.00008",
				"ampeg_decay": "29.9953",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"offset": "0",
				"end": "293887",
				"loop_start": "0",
				"loop_end": "0"
			},
			{
				"sample": "samples\\As_059__B3_1.wav",
				"volume": "3",
				"lokey": "57",
				"hikey": "60",
				"pitch_keycenter": "59",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "3.00008",
				"ampeg_decay": "19.9964",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "139493",
				"loop_start": "138592",
				"loop_end": "139483"
			},
			{
				"sample": "samples\\As_062__D4_1.wav",
				"volume": "3",
				"lokey": "61",
				"hikey": "63",
				"pitch_keycenter": "62",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "3.50035",
				"ampeg_decay": "16",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "153922",
				"loop_start": "153314",
				"loop_end": "153912"
			},
			{
				"sample": "samples\\As_065__F4_1.wav",
				"volume": "3",
				"lokey": "64",
				"hikey": "68",
				"pitch_keycenter": "65",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "3.50035",
				"ampeg_decay": "12.0003",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "156044",
				"loop_start": "155403",
				"loop_end": "156034"
			},
			{
				"sample": "samples\\As_071__B4_1.wav",
				"volume": "3",
				"lokey": "69",
				"hikey": "73",
				"pitch_keycenter": "71",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "4",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "186549",
				"loop_start": "186094",
				"loop_end": "186539"
			},
			{
				"sample": "samples\\As_076__E5_1.wav",
				"volume": "3",
				"lokey": "74",
				"hikey": "78",
				"pitch_keycenter": "76",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "3.30008",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "147272",
				"loop_start": "146929",
				"loop_end": "147262"
			},
			{
				"sample": "samples\\As_081__A5_2.wav",
				"volume": "3",
				"lokey": "79",
				"hikey": "83",
				"pitch_keycenter": "81",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "189678",
				"loop_start": "188870",
				"loop_end": "189668"
			},
			{
				"sample": "samples\\As_086__D6_2.wav",
				"volume": "3",
				"lokey": "84",
				"hikey": "88",
				"pitch_keycenter": "86",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "170274",
				"loop_start": "169591",
				"loop_end": "170264"
			},
			{
				"sample": "samples\\As_091__G6_2.wav",
				"volume": "3",
				"lokey": "89",
				"hikey": "93",
				"pitch_keycenter": "91",
				"lovel": "112",
				"hivel": "127",
				"ampeg_hold": "1.50004",
				"ampeg_decay": "9.99819",
				"ampeg_sustain": "0.00103514",
				"ampeg_release": "0.300062",
				"loop_mode": "loop_continuous",
				"offset": "0",
				"end": "86495",
				"loop_start": "86122",
				"loop_end": "86485"
			},
			{
				"sample": "samples\\As_096__C7_2.wav",
				"volume": "3",
				"lokey": "94",
				"hikey": "103",
				"pitch_keycenter": "96",
				"lovel": "112",
				"hivel": "127",
				"ampeg_release": "0.300062",
				"offset": "0",
				"end": "108099",
				"loop_start": "0",
				"loop_end": "0"
			}
		],
		"lokey": "0",
		"hikey": "127",
		"lovel": "0",
		"hivel": "127",
		"loop_mode": "no_loop",
		"ampeg_attack": "0.001",
		"amplfo_freq": "8.176",
		"fillfo_freq": "8.176",
		"pitchlfo_freq": "8.176",
		"fil_type": "lpf_2p",
		"cutoff": "19914"
	}
];
	}

	_buildBuffers() {

	}
}
```
