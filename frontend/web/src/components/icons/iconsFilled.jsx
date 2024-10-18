import React from 'react';


const iconList = [
	{
	 	 key: 'IconCarouselHorizontalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-carousel-horizontal" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 4h-8a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> <path d="M22 6a1 1 0 0 1 .117 1.993l-.117 .007h-1v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" /> <path d="M3 6a2 2 0 0 1 1.995 1.85l.005 .15v8a2 2 0 0 1 -1.85 1.995l-.15 .005h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMugFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mug" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3.903 4.008l.183 -.008h10.828a2.08 2.08 0 0 1 2.086 2.077v.923h1.5c1.917 0 3.5 1.477 3.5 3.333v2.334c0 1.856 -1.583 3.333 -3.5 3.333h-1.663a5.33 5.33 0 0 1 -5.17 4h-4.334c-2.944 0 -5.333 -2.375 -5.333 -5.308v-8.618a2.08 2.08 0 0 1 1.903 -2.066m13.097 9.992h1.5c.843 0 1.5 -.613 1.5 -1.333v-2.334c0 -.72 -.657 -1.333 -1.5 -1.333h-1.5z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTriangleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-triangle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLassoPolygonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-lasso-polygon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5.581 2.186l6.566 4.69l7.502 -2.812a1 1 0 0 1 1.326 .714l.019 .112l1 9a1 1 0 0 1 -.678 1.059l-9 3a1 1 0 0 1 -.553 .023l-4.434 -1.082a3 3 0 0 1 -1.287 .923c.095 .986 .374 1.9 .826 2.69a1 1 0 0 1 -1.736 .993c-.624 -1.09 -.99 -2.335 -1.098 -3.656a3 3 0 0 1 -2.034 -2.84l.005 -.176a3 3 0 0 1 .86 -1.932l-.818 -2.59a1 1 0 0 1 -.009 -.577l2 -7a1 1 0 0 1 1.543 -.539m-.009 2.451l-1.528 5.348l.642 2.031q .155 -.016 .314 -.016a3 3 0 0 1 3 2.995l3.957 .965l7.96 -2.654l-.769 -6.919l-6.797 2.55a1 1 0 0 1 -.827 -.058l-.105 -.065z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPointFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-point" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareRoundedMinusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-minus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm3 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPlayerStopFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-player-stop" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCirclesFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circles" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> <path d="M17.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> <path d="M12 2a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconReceiptFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-receipt" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 2a3 3 0 0 1 3 3v16a1 1 0 0 1 -1.555 .832l-2.318 -1.545l-1.42 1.42a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.421 -1.42l-2.317 1.545l-.019 .012l-.054 .03l-.028 .017l-.054 .023l-.05 .023l-.049 .015l-.06 .019l-.052 .009l-.057 .011l-.084 .006l-.026 .003h-.022l-.049 -.003h-.039l-.013 -.003h-.016l-.041 -.008l-.038 -.005l-.015 -.005l-.018 -.002l-.034 -.011l-.04 -.01l-.019 -.007l-.015 -.004l-.029 -.013l-.04 -.015l-.021 -.011l-.013 -.005l-.028 -.016l-.036 -.018l-.014 -.01l-.018 -.01l-.038 -.027l-.022 -.014l-.01 -.009l-.02 -.014l-.045 -.041l-.012 -.008l-.024 -.024l-.035 -.039l-.02 -.02l-.007 -.011l-.011 -.012l-.032 -.045l-.02 -.025l-.012 -.019l-.03 -.054l-.017 -.028l-.023 -.054l-.023 -.05a1 1 0 0 1 -.034 -.108l-.01 -.057l-.01 -.053l-.009 -.132v-16a3 3 0 0 1 3 -3zm-2 12h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeWcFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-wc" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-7.534 4a1 1 0 0 0 -.963 .917l-.204 2.445l-.405 -.81l-.063 -.11a1 1 0 0 0 -1.725 .11l-.406 .81l-.203 -2.445a1 1 0 0 0 -.963 -.917l-.117 .003a1 1 0 0 0 -.914 1.08l.5 6l.016 .117c.175 .91 1.441 1.115 1.875 .247l1.106 -2.211l1.106 2.211c.452 .904 1.807 .643 1.89 -.364l.5 -6a1 1 0 0 0 -.913 -1.08zm4.034 0a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHelpOctagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-help-octagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.897 1a4 4 0 0 1 2.664 1.016l.165 .156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006 .227v5.794a4 4 0 0 1 -1.016 2.664l-.156 .165l-4.1 4.1a4 4 0 0 1 -2.603 1.168l-.227 .006h-5.795a3.999 3.999 0 0 1 -2.664 -1.017l-.165 -.156l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604l-.006 -.227v-5.794a4 4 0 0 1 1.016 -2.664l.156 -.165l4.1 -4.1a4 4 0 0 1 2.605 -1.168l.227 -.006h5.793zm-2.897 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPooFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-poo" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.063 2.995l.086 .009h.07c2.237 .098 3.87 1.686 4.214 4.046l.01 .075l.133 .04a3.5 3.5 0 0 1 1.718 1.22l.125 .179a3.5 3.5 0 0 1 .567 2.243l-.006 .049l.032 .025a4 4 0 0 1 1.476 2.8l.01 .191l.15 .125a4 4 0 0 1 1.29 3.693l-.042 .208c-.4 1.728 -1.89 2.986 -3.72 3.092h-10.176a4 4 0 0 1 -2.638 -7.008l.14 -.118l.011 -.19a4 4 0 0 1 1.476 -2.798l.032 -.025l-.006 -.048a3.5 3.5 0 0 1 .452 -2.058l.114 -.186c.603 -.912 1.598 -1.49 2.755 -1.564h.164c.743 0 1.26 -1.242 .606 -2.553l.006 .015l-.01 -.017a1 1 0 0 1 -.095 -.323l-.007 -.117c0 -.654 .539 -1.031 1.063 -1.005m3.758 12.434a1 1 0 0 0 -1.392 -.25a2.5 2.5 0 0 1 -2.858 0a1 1 0 0 0 -1.142 1.642a4.5 4.5 0 0 0 5.142 0a1 1 0 0 0 .25 -1.392m-4.811 -4.429h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m4 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGhostFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-ghost" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 3a8 8 0 0 1 7.996 7.75l.004 .25l-.001 6.954l.01 .103a2.78 2.78 0 0 1 -1.468 2.618l-.163 .08c-1.053 .475 -2.283 .248 -3.129 -.593l-.137 -.146a.65 .65 0 0 0 -1.024 0a2.65 2.65 0 0 1 -4.176 0a.65 .65 0 0 0 -.512 -.25c-.2 0 -.389 .092 -.55 .296a2.78 2.78 0 0 1 -4.859 -2.005l.008 -.091l.001 -6.966l.004 -.25a8 8 0 0 1 7.996 -7.75zm2.82 10.429a1 1 0 0 0 -1.391 -.25a2.5 2.5 0 0 1 -2.858 0a1 1 0 0 0 -1.142 1.642a4.5 4.5 0 0 0 5.142 0a1 1 0 0 0 .25 -1.392zm-4.81 -4.429l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm4 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCapsuleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-capsule" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l-.243 .004a7.004 7.004 0 0 0 -6.757 6.996v6a7 7 0 0 0 7 7l.243 -.004a7.004 7.004 0 0 0 6.757 -6.996v-6a7 7 0 0 0 -7 -7z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBulbFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bulb" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z" /> <path d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z" /> <path d="M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z" /> <path d="M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomCancelFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-cancel" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-5.293 4.22a1 1 0 0 0 -1.414 1.415l1.292 1.293l-1.292 1.293a1 1 0 0 0 1.414 1.414l1.293 -1.292l1.293 1.292a1 1 0 0 0 1.414 -1.414l-1.292 -1.293l1.292 -1.293a1 1 0 1 0 -1.414 -1.414l-1.293 1.292z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconInfoSquareFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-info-square" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-7 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandGithubFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlertHexagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alert-hexagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.585 13.586l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconKeyframeAlignVerticalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-keyframe-align-vertical" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" /> <path d="M12 6c-.629 0 -1.214 .301 -1.606 .807l-2.908 3.748a2.395 2.395 0 0 0 -.011 2.876l2.919 3.762c.39 .505 .977 .807 1.606 .807c.629 0 1.214 -.301 1.606 -.807l2.908 -3.748a2.395 2.395 0 0 0 .011 -2.876l-2.919 -3.762a2.032 2.032 0 0 0 -1.606 -.807z" /> <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bed" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3 6a1 1 0 0 1 .993 .883l.007 .117v6h6v-5a1 1 0 0 1 .883 -.993l.117 -.007h8a3 3 0 0 1 2.995 2.824l.005 .176v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-3h-16v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-11a1 1 0 0 1 1 -1z" /> <path d="M7 8a2 2 0 1 1 -1.995 2.15l-.005 -.15l.005 -.15a2 2 0 0 1 1.995 -1.85z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSteeringWheelFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-steering-wheel" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-13 8.66a8 8 0 0 0 7 7.937v-5.107a3 3 0 0 1 -1.898 -2.05l-5.07 -1.504q -.031 .36 -.032 .725m15.967 -.725l-5.069 1.503a3 3 0 0 1 -1.897 2.051v5.108a8 8 0 0 0 6.985 -8.422zm-11.967 -6.204a8 8 0 0 0 -3.536 4.244l4.812 1.426a3 3 0 0 1 5.448 0l4.812 -1.426a8 8 0 0 0 -11.536 -4.244" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutNavbarExpandFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-navbar-expand" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm1 6h-14v9a1 1 0 0 0 .883 .993l.117 .007h12a1 1 0 0 0 .993 -.883l.007 -.117v-9zm-8.387 3.21l.094 .083l1.293 1.292l1.293 -1.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBuildingBroadcastTowerFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-building-broadcast-tower" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 10a2 2 0 0 1 1.497 3.327l2.452 7.357a1 1 0 1 1 -1.898 .632l-.44 -1.316h-3.224l-.438 1.317a1 1 0 0 1 -1.152 .663l-.113 -.03a1 1 0 0 1 -.633 -1.265l2.452 -7.357a2 2 0 0 1 -.503 -1.328l.005 -.15a2 2 0 0 1 1.995 -1.85" /> <path d="M18.093 4.078a10 10 0 0 1 3.137 11.776a1 1 0 0 1 -1.846 -.77a8 8 0 1 0 -14.769 0a1 1 0 0 1 -1.846 .77a10 10 0 0 1 15.324 -11.776" /> <path d="M15.657 7.243a6 6 0 0 1 1.882 7.066a1 1 0 1 1 -1.846 -.77a4 4 0 1 0 -7.384 0a1 1 0 1 1 -1.846 .77a6 6 0 0 1 9.194 -7.066" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSectionFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-section" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20.01 19a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm-16 0a1 1 0 0 1 0 2a1 1 0 0 1 -.127 -1.993zm4 0a1 1 0 0 1 0 2a1 1 0 0 1 -.127 -1.993zm4 0a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm4 0a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm4 -16a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm-16 0a1 1 0 1 1 0 2a1 1 0 0 1 -.127 -1.993zm4 0a1 1 0 1 1 0 2a1 1 0 0 1 -.127 -1.993zm4 0a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm3.99 0a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m3 4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconShieldLockFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-shield-lock" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm.002 7a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 0 0 .995 1.581v1.769l.007 .117a1 1 0 0 0 1.993 -.117l.001 -1.768a2 2 0 0 0 -1.001 -3.732z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconOvalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-oval" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c3.972 0 7 4.542 7 10s-3.028 10 -7 10c-3.9 0 -6.89 -4.379 -6.997 -9.703l-.003 -.297l.003 -.297c.107 -5.323 3.097 -9.703 6.997 -9.703z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHourglassFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-hourglass" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 2a2 2 0 0 1 1.995 1.85l.005 .15v2a6.996 6.996 0 0 1 -3.393 6a6.994 6.994 0 0 1 3.388 5.728l.005 .272v2a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-2a6.996 6.996 0 0 1 3.393 -6a6.994 6.994 0 0 1 -3.388 -5.728l-.005 -.272v-2a2 2 0 0 1 1.85 -1.995l.15 -.005h10z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMicrowaveFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-microwave" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 5a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2zm-6 2h-10v10h10zm4.01 7h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m0 -3h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m0 -3h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2" /> <path d="M5.945 9.668c1.336 -.891 2.274 -.891 3.61 0l-.089 -.056l.04 .017l.146 .064l.095 .044c.378 .171 .533 .23 .674 .255c.133 .023 .186 .005 .336 -.16a1 1 0 1 1 1.486 1.337c-.613 .681 -1.358 .934 -2.164 .794c-.368 -.064 -.621 -.161 -1.158 -.405a10 10 0 0 0 -.306 -.135l-.17 -.091c-.664 -.443 -.726 -.443 -1.39 0a1 1 0 1 1 -1.11 -1.664" /> <path d="M5.945 12.668c1.336 -.891 2.274 -.891 3.61 0l-.089 -.056l.04 .017l.146 .064l.095 .044c.378 .171 .533 .23 .674 .255c.133 .023 .186 .005 .336 -.16a1 1 0 0 1 1.486 1.337c-.613 .681 -1.358 .934 -2.164 .794c-.368 -.064 -.621 -.161 -1.158 -.405a10 10 0 0 0 -.306 -.135l-.17 -.091c-.664 -.443 -.726 -.443 -1.39 0a1 1 0 1 1 -1.11 -1.664" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCardboardsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cardboards" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 5a3 3 0 0 1 3 3v8.5a3.5 3.5 0 0 1 -3.5 3.5h-1.062a4 4 0 0 1 -3.118 -1.504l-1.54 -1.92a1 1 0 0 0 -1.56 0l-1.538 1.917a4 4 0 0 1 -3.122 1.507h-1.06a3.5 3.5 0 0 1 -3.5 -3.5v-8.5a3 3 0 0 1 3 -3zm-11 5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m8 0a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutAlignCenterFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-align-center" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 3a1 1 0 0 1 1 1v4h3a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-3v4a1 1 0 0 1 -2 0v-4h-3a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h3v-4a1 1 0 0 1 1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomCheckFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-check" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-.293 4.22a1 1 0 0 0 -1.414 0l-3.293 3.294l-1.293 -1.293l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinPoundFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin-pound" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4 2.66a3 3 0 0 0 -3 3v2h-1a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h1v1a1 1 0 0 1 -.77 .974l-.113 .02l-.117 .006c-1.287 0 -1.332 1.864 -.133 1.993l.133 .007h6a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-3.171l.048 -.148a3 3 0 0 0 .123 -.852v-1h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-1v-2a1 1 0 0 1 .883 -.993l.117 -.007a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 0 2 0a3 3 0 0 0 -3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFountainFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-fountain" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 2a4 4 0 0 1 4 4a1 1 0 0 1 -1.993 .117l-.007 -.117a2 2 0 0 0 -3.995 -.15l-.005 .15v9h1v-4a3 3 0 0 1 6 0a1 1 0 0 1 -1.993 .117l-.007 -.117a1 1 0 0 0 -1.993 -.117l-.007 .117v4h5a1 1 0 0 1 .993 .883l.007 .117v2a4 4 0 0 1 -3.8 3.995l-.2 .005h-12a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-2a1 1 0 0 1 .883 -.993l.117 -.007h5v-4a1 1 0 0 0 -1.993 -.117l-.007 .117a1 1 0 0 1 -2 0a3 3 0 0 1 5.995 -.176l.005 .176v4h1v-9a2 2 0 1 0 -4 0a1 1 0 1 1 -2 0a4 4 0 0 1 7.001 -2.645a3.983 3.983 0 0 1 2.999 -1.355z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChessRookFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chess-rook" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3a1 1 0 0 1 .993 .883l.007 .117v2h1.652l.362 -2.164a1 1 0 0 1 1.034 -.836l.116 .013a1 1 0 0 1 .836 1.035l-.013 .116l-.5 3a1 1 0 0 1 -.865 .829l-.122 .007h-1.383l.877 7.89a1 1 0 0 1 -.877 1.103l-.117 .007h-8a1 1 0 0 1 -1 -.993l.006 -.117l.877 -7.89h-1.383a1 1 0 0 1 -.96 -.718l-.026 -.118l-.5 -3a1 1 0 0 1 1.947 -.442l.025 .114l.361 2.164h1.653v-2a1 1 0 0 1 1.993 -.117l.007 .117v2h2v-2a1 1 0 0 1 1 -1z" /> <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBottleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bottle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13 1a2 2 0 0 1 1.995 1.85l.005 .15v.5c0 1.317 .381 2.604 1.094 3.705l.17 .25l.05 .072a9.093 9.093 0 0 1 1.68 4.92l.006 .354v6.199a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6.2a9.1 9.1 0 0 1 1.486 -4.982l.2 -.292l.05 -.069a6.823 6.823 0 0 0 1.264 -3.957v-.5a2 2 0 0 1 1.85 -1.995l.15 -.005h2zm.362 5h-2.724a8.827 8.827 0 0 1 -1.08 2.334l-.194 .284l-.05 .069a7.091 7.091 0 0 0 -1.307 3.798l-.003 .125a3.33 3.33 0 0 1 1.975 -.61a3.4 3.4 0 0 1 2.833 1.417c.27 .375 .706 .593 1.209 .583a1.4 1.4 0 0 0 1.166 -.583a3.4 3.4 0 0 1 .81 -.8l.003 .183c0 -1.37 -.396 -2.707 -1.137 -3.852l-.228 -.332a8.827 8.827 0 0 1 -1.273 -2.616z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutDistributeHorizontalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-distribute-horizontal" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" /> <path d="M20 19a1 1 0 0 1 0 2h-16a1 1 0 0 1 0 -2z" /> <path d="M16 8a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconThumbUpFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-thumb-up" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" /> <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlertSquareRoundedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alert-square-rounded" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBeerFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-beer" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 2a2 2 0 0 1 1.995 1.85l.005 .15v4c0 1.335 -.229 2.386 -.774 3.692l-.157 .363l-.31 .701a8.902 8.902 0 0 0 -.751 3.242l-.008 .377v3.625a2 2 0 0 1 -1.85 1.995l-.15 .005h-6a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3.625c0 -1.132 -.21 -2.25 -.617 -3.28l-.142 -.34l-.31 -.699c-.604 -1.358 -.883 -2.41 -.925 -3.698l-.006 -.358v-4a2 2 0 0 1 1.85 -1.995l.15 -.005h10zm0 2h-10v3h10v-3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPointerFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-pointer" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3.039 4.277l3.904 13.563c.185 .837 .92 1.516 1.831 1.642l.17 .016a2.2 2.2 0 0 0 1.982 -1.006l.045 -.078l1.4 -2.072l4.05 4.05a2.067 2.067 0 0 0 2.924 0l1.047 -1.047c.388 -.388 .606 -.913 .606 -1.461l-.008 -.182a2.067 2.067 0 0 0 -.598 -1.28l-4.047 -4.048l2.103 -1.412c.726 -.385 1.18 -1.278 1.053 -2.189a2.2 2.2 0 0 0 -1.701 -1.845l-13.524 -3.89a1 1 0 0 0 -1.236 1.24z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChessKnightFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chess-knight" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8.959 1.99l-.147 .028l-.115 .029a1 1 0 0 0 -.646 1.27l.749 2.245l-2.815 1.735a2 2 0 0 0 -.655 2.751l.089 .133a2 2 0 0 0 1.614 .819l1.563 -.001l-1.614 4.674a1 1 0 0 0 .945 1.327h7.961a1 1 0 0 0 1 -.978l.112 -5c0 -3.827 -1.555 -6.878 -4.67 -7.966l-2.399 -.83l-.375 -.121l-.258 -.074l-.135 -.031l-.101 -.013l-.055 -.001l-.048 .003z" /> <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAdjustmentsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-adjustments" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 3a1 1 0 0 1 .993 .883l.007 .117v3.171a3.001 3.001 0 0 1 0 5.658v7.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-7.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-3.17a1 1 0 0 1 1 -1z" /> <path d="M12 3a1 1 0 0 1 .993 .883l.007 .117v9.171a3.001 3.001 0 0 1 0 5.658v1.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-9.17a1 1 0 0 1 1 -1z" /> <path d="M18 3a1 1 0 0 1 .993 .883l.007 .117v.171a3.001 3.001 0 0 1 0 5.658v10.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-10.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-.17a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBellRingingFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bell-ringing" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.451 2.344a1 1 0 0 1 1.41 -.099a12.05 12.05 0 0 1 3.048 4.064a1 1 0 1 1 -1.818 .836a10.05 10.05 0 0 0 -2.54 -3.39a1 1 0 0 1 -.1 -1.41z" /> <path d="M5.136 2.245a1 1 0 0 1 1.312 1.51a10.05 10.05 0 0 0 -2.54 3.39a1 1 0 1 1 -1.817 -.835a12.05 12.05 0 0 1 3.045 -4.065z" /> <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /> <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomCodeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-code" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-5.293 4.22a1 1 0 0 0 -1.414 0l-2 2a1 1 0 0 0 0 1.415l2 2a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-1.292 -1.293l1.292 -1.293a1 1 0 0 0 0 -1.414m4 0a1 1 0 0 0 -1.414 0l-.083 .095a1 1 0 0 0 .083 1.32l1.292 1.292l-1.292 1.293a1 1 0 0 0 1.414 1.414l2 -2a1 1 0 0 0 0 -1.414z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconButterflyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-butterfly" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.117 6.244l.228 .076a5.5 5.5 0 0 1 1.24 9.738l-.063 .039l.02 .034a4 4 0 0 1 .101 3.533l-.093 .19a4 4 0 0 1 -5.55 1.608v-14.857a5.5 5.5 0 0 1 4.118 -.36" /> <path d="M8.505 6c.885 0 1.736 .21 2.495 .597v14.87a4 4 0 0 1 -1.012 .41l-.196 .045a4 4 0 0 1 -4.424 -5.587l.118 -.238l-.035 -.023a5.5 5.5 0 0 1 -2.397 -5.258l.034 -.233a5.5 5.5 0 0 1 5.417 -4.583" /> <path d="M14.445 2.168a1 1 0 0 1 1.11 1.664l-3 2a1 1 0 0 1 -1.11 0l-3 -2a1 1 0 0 1 1.11 -1.664l2.444 1.63z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutListFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-list" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" /> <path d="M18 13a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconUmbrellaFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-umbrella" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 3a9 9 0 0 1 9 9a1 1 0 0 1 -.883 .993l-.117 .007h-7v5a1 1 0 0 0 1.993 .117l.007 -.117a1 1 0 0 1 2 0a3 3 0 0 1 -5.995 .176l-.005 -.176v-5h-7a1 1 0 0 1 -.993 -.883l-.007 -.117a9 9 0 0 1 9 -9z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconUserFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-user" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeVrFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-vr" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-3.5 4h-1.5a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1.196l1.168 1.75a1 1 0 0 0 1.387 .278l.093 -.07a1 1 0 0 0 .184 -1.317l-1.159 -1.738l.044 -.023a2.5 2.5 0 0 0 -1.217 -4.684m-4.184 .051a1 1 0 0 0 -1.265 .633l-1.051 3.154l-1.051 -3.154a1 1 0 0 0 -1.898 .632l2 6c.304 .912 1.594 .912 1.898 0l2 -6a1 1 0 0 0 -.633 -1.265m4.184 1.949a.5 .5 0 1 1 0 1h-.5v-1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeTmFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-tm" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-9 4h-4a1 1 0 1 0 0 2h1v5a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-5h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1m8 1c0 -.99 -1.283 -1.378 -1.832 -.555l-1.168 1.752l-1.168 -1.752c-.549 -.823 -1.832 -.434 -1.832 .555v6a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-2.697l.168 .252l.08 .104a1 1 0 0 0 1.584 -.104l.168 -.253v2.698a1 1 0 0 0 2 0z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCannabisFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cannabis" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.894 1.553c1.472 2.945 2.17 5.028 2.244 6.812l.001 .091l.032 -.022a8.7 8.7 0 0 1 2.73 -1.191l.352 -.079a8 8 0 0 1 1.562 -.169l.253 .007a1 1 0 0 1 .85 1.396c-.949 2.187 -1.818 3.595 -2.902 4.664l-.061 .058l.25 .055q .45 .108 .869 .259l.276 .104c.586 .235 1.006 .479 1.25 .662a1 1 0 0 1 -.042 1.63l-.199 .112l-1.133 .587c-.567 .289 -1.166 .584 -1.404 .67q -.123 .045 -.244 .083l-.074 .019l.016 .042c.327 .912 .456 1.789 .477 2.462l.003 .195a1 1 0 0 1 -1 1c-1.257 0 -2.77 -.729 -4.001 -1.647l.001 2.647a1 1 0 0 1 -2 0v-2.647c-1.16 .866 -2.57 1.563 -3.781 1.64l-.219 .007a1 1 0 0 1 -1 -1c0 -.624 .098 -1.464 .379 -2.358l.116 -.341l-.073 -.02l-.244 -.081c-.343 -.125 -1.442 -.686 -2.106 -1.032l-.52 -.274a1 1 0 0 1 -.152 -1.694c.244 -.183 .664 -.427 1.25 -.662a8 8 0 0 1 1.145 -.363l.249 -.055l-.06 -.058c-1.024 -1.01 -1.856 -2.322 -2.744 -4.307l-.157 -.357a1 1 0 0 1 .724 -1.38l.149 -.017l.058 -.003a7.5 7.5 0 0 1 1.744 .159a8.6 8.6 0 0 1 2.727 1.045l.27 .169v-.037c-.028 -1.594 .375 -3.18 1.095 -4.704l.139 -.285c.455 -.908 .914 -1.586 1.238 -1.98a1 1 0 0 1 1.666 .189" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCopyPlusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-copy-plus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.333 6a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-4.333 4a1 1 0 0 0 -1 1v2h-2a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v2a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-2h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-2a1 1 0 0 0 -.883 -.993zm1 -8c1.094 0 1.828 .533 2.374 1.514a1 1 0 1 1 -1.748 .972c-.221 -.398 -.342 -.486 -.626 -.486h-10c-.548 0 -1 .452 -1 1v9.998c0 .32 .154 .618 .407 .805l.1 .065a1 1 0 1 1 -.99 1.738a3 3 0 0 1 -1.517 -2.606v-10c0 -1.652 1.348 -3 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutSidebarFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm12 -16h-8v14h8a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutGridFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-grid" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" /> <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" /> <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" /> <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAdCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-ad-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10c-5.43 0 -9.848 -4.327 -9.996 -9.72l-.004 -.28l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm-3.5 6a2.5 2.5 0 0 0 -2.495 2.336l-.005 .164v4.5l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-1h1v1l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4.5l-.005 -.164a2.5 2.5 0 0 0 -2.495 -2.336zm6.5 0h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3zm0 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007v-4zm-6.5 0a.5 .5 0 0 1 .492 .41l.008 .09v1.5h-1v-1.5l.008 -.09a.5 .5 0 0 1 .492 -.41z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconKeyframeAlignHorizontalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-keyframe-align-horizontal" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 6c-.629 0 -1.214 .301 -1.606 .807l-2.908 3.748a2.395 2.395 0 0 0 -.011 2.876l2.919 3.762c.39 .505 .977 .807 1.606 .807c.629 0 1.214 -.301 1.606 -.807l2.908 -3.748a2.395 2.395 0 0 0 .011 -2.876l-2.919 -3.762a2.032 2.032 0 0 0 -1.606 -.807z" /> <path d="M5 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" /> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRectangleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-rectangle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTrashXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-trash-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /> <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomOutAreaFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-out-area" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1 -1.414 1.414l-2.817 -2.816a6 6 0 0 1 -9.476 -4.891l.004 -.225a6 6 0 0 1 5.996 -5.775m2 5h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m-14 0a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2h-1a3 3 0 0 1 -3 -3v-1a1 1 0 0 1 1 -1m0 -5a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1 -1m3 -7a1 1 0 1 1 0 2h-1a1 1 0 0 0 -1 1v1a1 1 0 1 1 -2 0v-1a3 3 0 0 1 3 -3zm5 0a1 1 0 0 1 0 2h-1a1 1 0 1 1 0 -2zm5 0a3 3 0 0 1 3 3v1a1 1 0 0 1 -2 0v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMilkFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-milk" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.799 7l.144 .23a7 7 0 0 1 1.057 3.7v8.07a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.071a7 7 0 0 1 1.057 -3.698l.142 -.231zm-5.799 6a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0 -2m2 -6h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0 -2m1 -7a2 2 0 0 1 2 2v1h-10v-1a2 2 0 0 1 2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRosetteDiscountCheckFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHomeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-home" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCopyrightFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-copyright" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2.34 5.659a4.016 4.016 0 0 0 -5.543 .23a3.993 3.993 0 0 0 0 5.542a4.016 4.016 0 0 0 5.543 .23a1 1 0 0 0 -1.32 -1.502c-.81 .711 -2.035 .66 -2.783 -.116a1.993 1.993 0 0 1 0 -2.766a2.016 2.016 0 0 1 2.783 -.116a1 1 0 0 0 1.32 -1.501z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPictureInPictureFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-picture-in-picture" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v4a1 1 0 0 1 -2 0v-4a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 1 0 2h-6a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3z" /> <path d="M20 13a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChartBubbleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chart-bubble" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 12a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" /> <path d="M16 16a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176a3 3 0 0 1 2.995 -2.824z" /> <path d="M14.5 2a5.5 5.5 0 1 1 -5.496 5.721l-.004 -.221l.004 -.221a5.5 5.5 0 0 1 5.496 -5.279z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPennantFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-pennant" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10 2a1 1 0 0 1 .993 .883l.007 .117v.35l8.406 3.736c.752 .335 .79 1.365 .113 1.77l-.113 .058l-8.406 3.735v7.351h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-17a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrightnessAutoFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brightness-auto" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.707 2.793l2.208 2.207h3.085a1 1 0 0 1 .993 .883l.007 .117v3.085l2.207 2.208a1 1 0 0 1 .083 1.32l-.083 .094l-2.207 2.207v3.086a1 1 0 0 1 -.883 .993l-.117 .007h-3.086l-2.207 2.207a1 1 0 0 1 -1.32 .083l-.094 -.083l-2.208 -2.207h-3.085a1 1 0 0 1 -.993 -.883l-.007 -.117v-3.085l-2.207 -2.208a1 1 0 0 1 -.083 -1.32l.083 -.094l2.207 -2.209v-3.084a1 1 0 0 1 .883 -.993l.117 -.007h3.084l2.209 -2.207a1 1 0 0 1 1.414 0m-.707 5.207a3 3 0 0 0 -3 3v3.5a1 1 0 0 0 2 0v-.5h2v.5a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-3.5a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 .883 -.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFunctionFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-function" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.333 3a3.667 3.667 0 0 1 3.667 3.667v10.666a3.667 3.667 0 0 1 -3.667 3.667h-10.666a3.667 3.667 0 0 1 -3.667 -3.667v-10.666a3.667 3.667 0 0 1 3.667 -3.667zm-3.583 3a2.38 2.38 0 0 0 -2.37 2.145l-.285 2.855h-2.095l-.117 .007a1 1 0 0 0 .117 1.993h1.894l-.265 2.656l-.014 .071a.38 .38 0 0 1 -.365 .273a.25 .25 0 0 1 -.25 -.25v-.25l-.007 -.117a1 1 0 0 0 -1.993 .117v.25l.005 .154a2.25 2.25 0 0 0 2.245 2.096a2.38 2.38 0 0 0 2.37 -2.145l.284 -2.855h2.096l.117 -.007a1 1 0 0 0 -.117 -1.993h-1.895l.266 -2.656l.014 -.071a.381 .381 0 0 1 .365 -.273a.25 .25 0 0 1 .25 .25v.25l.007 .117a1 1 0 0 0 1.993 -.117v-.25l-.005 -.154a2.25 2.25 0 0 0 -2.245 -2.096z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTimelineEventFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-timeline-event" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 17c1.306 0 2.418 .835 2.83 2h5.17a1 1 0 0 1 0 2h-5.171a3.001 3.001 0 0 1 -5.658 0h-5.171a1 1 0 0 1 0 -2h5.17a3.001 3.001 0 0 1 2.83 -2z" /> <path d="M17 2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2.586l-1.707 1.707a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.708 -1.707h-2.585a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 2 -2h10z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHexagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-hexagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodHappyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-happy" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 9.66h-6a1 1 0 0 0 -1 1v.05a3.975 3.975 0 0 0 3.777 3.97l.227 .005a4.026 4.026 0 0 0 3.99 -3.79l.006 -.206a1 1 0 0 0 -1 -1.029zm-5.99 -5l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm6 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPinnedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-pinned" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCircleRectangleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circle-rectangle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m0 5.66h-10a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconShirtFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-shirt" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.883 3.007l.095 -.007l.112 .004l.113 .017l.113 .03l6 2a1 1 0 0 1 .677 .833l.007 .116v5a1 1 0 0 1 -.883 .993l-.117 .007h-2v7a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .576 -.906l.108 -.043l6 -2a1 1 0 0 1 1.316 .949a2 2 0 0 0 3.995 .15l.009 -.24l.017 -.113l.037 -.134l.044 -.103l.05 -.092l.068 -.093l.069 -.08c.056 -.054 .113 -.1 .175 -.14l.096 -.053l.103 -.044l.108 -.032l.112 -.02z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCactusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cactus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7 22a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-6a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-1a1 1 0 0 1 1.993 -.117l.007 .117v1a2 2 0 0 0 1.85 1.995l.15 .005v-7a3 3 0 0 1 5.995 -.176l.005 .176v10a2 2 0 0 0 1.995 -1.85l.005 -.15v-5a1 1 0 0 1 1.993 -.117l.007 .117v5a4 4 0 0 1 -3.8 3.995l-.2 .005v3h2a1 1 0 0 1 .117 1.993l-.117 .007h-10z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCandleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-candle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 10h-4a2 2 0 0 0 -2 2v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-9a2 2 0 0 0 -2 -2z" /> <path d="M11.254 2.334l-1.55 1.737c-1.042 1.277 -.898 3.097 .296 4.166a3 3 0 0 0 4.196 -4.28l-1.452 -1.624a1 1 0 0 0 -1.491 .001z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconConeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cone" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1.001c.72 0 1.385 .387 1.749 1.03l8.13 14.99a1 1 0 0 1 .121 .477v.498c0 2.46 -4.306 3.945 -9.677 4.002l-.323 .002c-5.52 0 -10 -1.495 -10 -4.003v-.5a1 1 0 0 1 .121 -.477l8.139 -15.005a2 2 0 0 1 1.74 -1.015" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinYenFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin-yen" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.445 3.828a1 1 0 0 0 -1.387 .277l-2.168 3.251l-2.168 -3.25a1 1 0 0 0 -1.286 -.337l-.1 .059a1 1 0 0 0 -.278 1.387l1.63 2.445h-.798a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v1h-2a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v1a1 1 0 0 0 .883 .993l.117 .007l.117 -.007a1 1 0 0 0 .883 -.993v-1h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-1h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-.799l1.631 -2.445a1 1 0 0 0 -.184 -1.317l-.093 -.07z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconIroningFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-ironing" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.459 5a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865a2 2 0 0 1 -1.971 2.328h-16.82a1 1 0 0 1 -1 -1a8 8 0 0 1 8 -8h8.652l-.22 -1.329a2 2 0 0 0 -1.811 -1.665l-.162 -.006h-7.459a1 1 0 1 1 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRosetteDiscountFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.01 2.011c.852 0 1.668 .34 2.267 .942l.698 .698a1.2 1.2 0 0 0 .845 .349h1a3.2 3.2 0 0 1 3.2 3.2v1c0 .316 .126 .62 .347 .843l.698 .698a3.2 3.2 0 0 1 .002 4.536l-.698 .698a1.2 1.2 0 0 0 -.349 .845v1a3.2 3.2 0 0 1 -3.2 3.2h-1a1.2 1.2 0 0 0 -.843 .347l-.698 .698a3.2 3.2 0 0 1 -4.536 .002l-.698 -.698a1.2 1.2 0 0 0 -.845 -.349h-1a3.2 3.2 0 0 1 -3.2 -3.2v-1a1.2 1.2 0 0 0 -.347 -.843l-.698 -.698a3.2 3.2 0 0 1 -.002 -4.536l.698 -.698a1.2 1.2 0 0 0 .349 -.845v-1l.005 -.182a3.2 3.2 0 0 1 3.195 -3.018h1a1.2 1.2 0 0 0 .843 -.347l.698 -.698a3.2 3.2 0 0 1 2.269 -.944m2.49 10.989a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m1.207 -4.707a1 1 0 0 0 -1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6 -6a1 1 0 0 0 0 -1.414m-6.207 -.293a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCookieFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cookie" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13.53 2.552l2.667 1.104a1 1 0 0 1 .414 1.53a3 3 0 0 0 3.492 4.604a1 1 0 0 1 1.296 .557l.049 .122a4 4 0 0 1 0 3.062l-.079 .151c-.467 .74 -.785 1.314 -.945 1.7c-.166 .4 -.373 1.097 -.613 2.073l-.047 .144a4 4 0 0 1 -2.166 2.164l-.139 .046c-1.006 .253 -1.705 .461 -2.076 .615c-.412 .17 -.982 .486 -1.696 .942l-.156 .082a4 4 0 0 1 -3.062 0l-.148 -.077c-.759 -.475 -1.333 -.793 -1.704 -.947c-.413 -.171 -1.109 -.378 -2.07 -.612l-.146 -.048a4 4 0 0 1 -2.164 -2.166l-.046 -.138c-.254 -1.009 -.463 -1.709 -.615 -2.078q -.256 -.621 -.942 -1.695l-.082 -.156a4 4 0 0 1 0 -3.062l.084 -.16c.447 -.692 .761 -1.262 .94 -1.692c.147 -.355 .356 -1.057 .615 -2.078l.045 -.138a4 4 0 0 1 2.166 -2.164l.141 -.047c.988 -.245 1.686 -.453 2.074 -.614c.395 -.164 .967 -.48 1.7 -.944l.152 -.08a4 4 0 0 1 3.062 0m-1.531 13.448a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m4 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m-8 -1a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m4 -1a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m-1 -4c-.552 0 -1 .448 -1 1.01a1 1 0 1 0 2 -.01a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTagFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-tag" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.172 2a3 3 0 0 1 2.121 .879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1 -4.822 0l-7.71 -7.71a3 3 0 0 1 -.879 -2.121v-5.172a4 4 0 0 1 4 -4zm-3.672 3.5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconWindmillFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-windmill" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c3.292 0 6 2.435 6 5.5c0 1.337 -.515 2.554 -1.369 3.5h4.369a1 1 0 0 1 1 1c0 3.292 -2.435 6 -5.5 6c-1.336 0 -2.553 -.515 -3.5 -1.368v4.368a1 1 0 0 1 -1 1c-3.292 0 -6 -2.435 -6 -5.5c0 -1.336 .515 -2.553 1.368 -3.5h-4.368a1 1 0 0 1 -1 -1c0 -3.292 2.435 -6 5.5 -6c1.337 0 2.554 .515 3.5 1.369v-4.369a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBriefcaseFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBedFlatFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bed-flat" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5 8a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" /> <path d="M18 7a4 4 0 0 1 4 4v2a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" /> <path d="M21 15a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPresentationFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-presentation" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1 -3 3h-5v2h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2h2v-2h-5a3 3 0 0 1 -3 -3v-9a1 1 0 1 1 0 -2zm-4.293 4.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBellXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bell-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /> <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004zm-1.489 6.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBellZFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bell-z" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /> <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004zm2 6h-4l-.117 .007a1 1 0 0 0 -.883 .993l.007 .117a1 1 0 0 0 .993 .883h1.584l-2.291 2.293l-.076 .084c-.514 .637 -.07 1.623 .783 1.623h4l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.993 -.883h-1.586l2.293 -2.293l.076 -.084c.514 -.637 .07 -1.623 -.783 -1.623z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLabelFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-label" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.52 6a2 2 0 0 1 1.561 .75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624a2 2 0 0 1 -1.561 .751h-10.52a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTiltShiftFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-tilt-shift" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8.178 2.766a1 1 0 1 1 .764 1.848a8 8 0 0 0 -2.595 1.733a1 1 0 1 1 -1.414 -1.414a10 10 0 0 1 3.245 -2.167" /> <path d="M2.767 8.176a1 1 0 1 1 1.846 .768a8 8 0 0 0 -.613 3.058a1 1 0 0 1 -2 -.004a10 10 0 0 1 .767 -3.822" /> <path d="M3.308 14.516a1 1 0 0 1 1.306 .542a8 8 0 0 0 1.733 2.595a1 1 0 1 1 -1.414 1.414a10 10 0 0 1 -2.167 -3.245a1 1 0 0 1 .542 -1.306" /> <path d="M7.637 19.926a1 1 0 0 1 1.307 -.54a8 8 0 0 0 3.058 .614a1 1 0 0 1 -.004 2a10 10 0 0 1 -3.822 -.767a1 1 0 0 1 -.54 -1.307" /> <path d="M17.653 17.653a1 1 0 1 1 1.414 1.414a10 10 0 0 1 -3.245 2.167a1 1 0 1 1 -.764 -1.848a8 8 0 0 0 2.595 -1.733" /> <path d="M21.002 11a1 1 0 0 1 .998 1.002a10 10 0 0 1 -.767 3.822a1 1 0 1 1 -1.846 -.768a8 8 0 0 0 .613 -3.058a1 1 0 0 1 1.002 -.998" /> <path d="M17.653 4.933a1 1 0 0 1 1.414 0a10 10 0 0 1 2.167 3.245a1 1 0 1 1 -1.848 .764a8 8 0 0 0 -1.733 -2.595a1 1 0 0 1 0 -1.414" /> <path d="M12.002 2a10 10 0 0 1 3.822 .767a1 1 0 1 1 -.768 1.846a8 8 0 0 0 -3.058 -.613a1 1 0 0 1 .004 -2" /> <path d="M12 9a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMessageChatbotFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-message-chatbot" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMicrophoneFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-microphone" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 9a1 1 0 0 1 1 1a8 8 0 0 1 -6.999 7.938l-.001 2.062h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0 -2h3v-2.062a8 8 0 0 1 -7 -7.938a1 1 0 1 1 2 0a6 6 0 0 0 12 0a1 1 0 0 1 1 -1m-7 -8a4 4 0 0 1 4 4v5a4 4 0 1 1 -8 0v-5a4 4 0 0 1 4 -4" /> </svg>
		 ),
	},
	{
	 	 key: 'IconKeyframeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-keyframe" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 4a2.599 2.599 0 0 0 -2 .957l-4.355 5.24a2.847 2.847 0 0 0 -.007 3.598l4.368 5.256c.499 .6 1.225 .949 1.994 .949a2.599 2.599 0 0 0 2 -.957l4.355 -5.24a2.847 2.847 0 0 0 .007 -3.598l-4.368 -5.256a2.593 2.593 0 0 0 -1.994 -.949z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPaintFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-paint" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 2a3 3 0 0 1 2.995 2.824l.005 .176a3 3 0 0 1 3 3a6 6 0 0 1 -5.775 5.996l-.225 .004h-4l.15 .005a2 2 0 0 1 1.844 1.838l.006 .157v4a2 2 0 0 1 -1.85 1.995l-.15 .005h-2a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-4a2 2 0 0 1 1.85 -1.995l.15 -.005v-1a1 1 0 0 1 .883 -.993l.117 -.007h5a4 4 0 0 0 4 -4a1 1 0 0 0 -.883 -.993l-.117 -.007l-.005 .176a3 3 0 0 1 -2.819 2.819l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h10z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconJewishStarFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-jewish-star" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8.433 6h-5.433l-.114 .006a1 1 0 0 0 -.743 1.508l2.69 4.486l-2.69 4.486l-.054 .1a1 1 0 0 0 .911 1.414h5.434l2.709 4.514l.074 .108a1 1 0 0 0 1.64 -.108l2.708 -4.514h5.435l.114 -.006a1 1 0 0 0 .743 -1.508l-2.691 -4.486l2.691 -4.486l.054 -.1a1 1 0 0 0 -.911 -1.414h-5.434l-2.709 -4.514a1 1 0 0 0 -1.714 0l-2.71 4.514z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBikeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bike" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5 14a4 4 0 1 1 -4 4l.005 -.2a4 4 0 0 1 3.995 -3.8" /> <path d="M19 14a4 4 0 1 1 -4 4l.005 -.2a4 4 0 0 1 3.995 -3.8" /> <path d="M14.832 7.445l1.703 2.555h2.465a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -.832 -.445l-1.396 -2.093l-3.275 2.62l2.21 2.21a1 1 0 0 1 .284 .577l.009 .131v4a1 1 0 0 1 -2 0v-3.585l-2.707 -2.708a1 1 0 0 1 -.01 -1.403l.092 -.085l5 -4a1 1 0 0 1 1.457 .226" /> <path d="M17 3a2 2 0 1 1 -2 2l.005 -.15a2 2 0 0 1 1.995 -1.85" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTransformFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-transform" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 14a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" /> <path d="M16.707 2.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.293 1.293h3.586a3 3 0 0 1 2.995 2.824l.005 .176v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-3a1 1 0 0 0 -.883 -.993l-.117 -.007h-3.585l1.292 1.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-3 -3a.98 .98 0 0 1 -.28 -.872l.036 -.146l.04 -.104c.058 -.126 .14 -.24 .245 -.334l2.959 -2.958a1 1 0 0 1 1.414 0z" /> <path d="M3 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 0 .883 .993l.117 .007h3.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083l.094 .083l3 3a.98 .98 0 0 1 .28 .872l-.036 .146l-.04 .104a1.02 1.02 0 0 1 -.245 .334l-2.959 2.958a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.291 -1.293h-3.584a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a1 1 0 0 1 1 -1z" /> <path d="M6 2a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFileFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-file" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h5z" /> <path d="M19 7h-4l-.001 -4.001z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPuzzleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-puzzle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10 2a3 3 0 0 1 2.995 2.824l.005 .176v1h3a2 2 0 0 1 1.995 1.85l.005 .15v3h1a3 3 0 0 1 .176 5.995l-.176 .005h-1v3a2 2 0 0 1 -1.85 1.995l-.15 .005h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-1a1 1 0 0 0 -1.993 -.117l-.007 .117v1a2 2 0 0 1 -1.85 1.995l-.15 .005h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 1.85 -1.995l.15 -.005h1a1 1 0 0 0 .117 -1.993l-.117 -.007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 1.85 -1.995l.15 -.005h3v-1a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeCcFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-cc" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10.5 4a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5m7 0a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChartCandleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chart-candle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 3a1 1 0 0 1 .993 .883l.007 .117v1a2 2 0 0 1 1.995 1.85l.005 .15v3a2 2 0 0 1 -1.85 1.995l-.15 .005v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-8a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 1.85 -1.995l.15 -.005v-1a1 1 0 0 1 1 -1z" /> <path d="M12 3a1 1 0 0 1 .993 .883l.007 .117v9a2 2 0 0 1 1.995 1.85l.005 .15v3a2 2 0 0 1 -1.85 1.995l-.15 .005a1 1 0 0 1 -1.993 .117l-.007 -.117l-.15 -.005a2 2 0 0 1 -1.844 -1.838l-.006 -.157v-3a2 2 0 0 1 1.85 -1.995l.15 -.005v-9a1 1 0 0 1 1 -1z" /> <path d="M18 3a1 1 0 0 1 .993 .883l.007 .117a2 2 0 0 1 1.995 1.85l.005 .15v4a2 2 0 0 1 -1.85 1.995l-.15 .005v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-8a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-4a2 2 0 0 1 1.85 -1.995l.15 -.005a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPawFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-paw" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 10c-1.32 0 -1.983 .421 -2.931 1.924l-.244 .398l-.395 .688a50.89 50.89 0 0 0 -.141 .254c-.24 .434 -.571 .753 -1.139 1.142l-.55 .365c-.94 .627 -1.432 1.118 -1.707 1.955c-.124 .338 -.196 .853 -.193 1.28c0 1.687 1.198 2.994 2.8 2.994l.242 -.006c.119 -.006 .234 -.017 .354 -.034l.248 -.043l.132 -.028l.291 -.073l.162 -.045l.57 -.17l.763 -.243l.455 -.136c.53 -.15 .94 -.222 1.283 -.222c.344 0 .753 .073 1.283 .222l.455 .136l.764 .242l.569 .171l.312 .084c.097 .024 .187 .045 .273 .062l.248 .043c.12 .017 .235 .028 .354 .034l.242 .006c1.602 0 2.8 -1.307 2.8 -3c0 -.427 -.073 -.939 -.207 -1.306c-.236 -.724 -.677 -1.223 -1.48 -1.83l-.257 -.19l-.528 -.38c-.642 -.47 -1.003 -.826 -1.253 -1.278l-.27 -.485l-.252 -.432c-1.011 -1.696 -1.618 -2.099 -3.053 -2.099z" /> <path d="M19.78 7h-.03c-1.219 .02 -2.35 1.066 -2.908 2.504c-.69 1.775 -.348 3.72 1.075 4.333c.256 .109 .527 .163 .801 .163c1.231 0 2.38 -1.053 2.943 -2.504c.686 -1.774 .34 -3.72 -1.076 -4.332a2.05 2.05 0 0 0 -.804 -.164z" /> <path d="M9.025 3c-.112 0 -.185 .002 -.27 .015l-.093 .016c-1.532 .206 -2.397 1.989 -2.108 3.855c.272 1.725 1.462 3.114 2.92 3.114l.187 -.005a1.26 1.26 0 0 0 .084 -.01l.092 -.016c1.533 -.206 2.397 -1.989 2.108 -3.855c-.27 -1.727 -1.46 -3.114 -2.92 -3.114z" /> <path d="M14.972 3c-1.459 0 -2.647 1.388 -2.916 3.113c-.29 1.867 .574 3.65 2.174 3.867c.103 .013 .2 .02 .296 .02c1.39 0 2.543 -1.265 2.877 -2.883l.041 -.23c.29 -1.867 -.574 -3.65 -2.174 -3.867a2.154 2.154 0 0 0 -.298 -.02z" /> <path d="M4.217 7c-.274 0 -.544 .054 -.797 .161c-1.426 .615 -1.767 2.562 -1.078 4.335c.563 1.451 1.71 2.504 2.941 2.504c.274 0 .544 -.054 .797 -.161c1.426 -.615 1.767 -2.562 1.078 -4.335c-.563 -1.451 -1.71 -2.504 -2.941 -2.504z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChessFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chess" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2a4 4 0 0 1 4 4a5.03 5.03 0 0 1 -.438 2.001l.438 -.001a1 1 0 0 1 .117 1.993l-.117 .007h-1.263l1.24 5.79a1 1 0 0 1 -.747 1.184l-.113 .02l-.117 .006h-6a1 1 0 0 1 -.996 -1.093l.018 -.117l1.24 -5.79h-1.262a1 1 0 0 1 -.117 -1.993l.117 -.007h.438a5.154 5.154 0 0 1 -.412 -1.525l-.02 -.259l-.006 -.216a4 4 0 0 1 4 -4z" /> <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSeedingFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-seeding" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 3a7 7 0 0 1 6.95 6.155a6.97 6.97 0 0 1 5.05 -2.155h3a1 1 0 0 1 1 1v1a7 7 0 0 1 -7 7h-2v4a1 1 0 0 1 -2 0v-7h-2a7 7 0 0 1 -7 -7v-2a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMessageCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-message-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5.821 4.91c3.899 -2.765 9.468 -2.539 13.073 .535c3.667 3.129 4.168 8.238 1.152 11.898c-2.841 3.447 -7.965 4.583 -12.231 2.805l-.233 -.101l-4.374 .931l-.04 .006l-.035 .007h-.018l-.022 .005h-.038l-.033 .004l-.021 -.001l-.023 .001l-.033 -.003h-.035l-.022 -.004l-.022 -.002l-.035 -.007l-.034 -.005l-.016 -.004l-.024 -.005l-.049 -.016l-.024 -.005l-.011 -.005l-.022 -.007l-.045 -.02l-.03 -.012l-.011 -.006l-.014 -.006l-.031 -.018l-.045 -.024l-.016 -.011l-.037 -.026l-.04 -.027l-.002 -.004l-.013 -.009l-.043 -.04l-.025 -.02l-.006 -.007l-.056 -.062l-.013 -.014l-.011 -.014l-.039 -.056l-.014 -.019l-.005 -.01l-.042 -.073l-.007 -.012l-.004 -.008l-.007 -.012l-.014 -.038l-.02 -.042l-.004 -.016l-.004 -.01l-.017 -.061l-.007 -.018l-.002 -.015l-.005 -.019l-.005 -.033l-.008 -.042l-.002 -.031l-.003 -.01v-.016l-.004 -.054l.001 -.036l.001 -.023l.002 -.053l.004 -.025v-.019l.008 -.035l.005 -.034l.005 -.02l.004 -.02l.018 -.06l.003 -.013l1.15 -3.45l-.022 -.037c-2.21 -3.747 -1.209 -8.391 2.413 -11.119z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconInfoHexagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-info-hexagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 9.586h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLegoFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-lego" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 2a1 1 0 0 1 1 1v1l.2 .005a4 4 0 0 1 3.795 3.795l.005 .2v9a4 4 0 0 1 -2.845 3.83l-.155 .043v.127a1 1 0 0 1 -.883 .993l-.117 .007h-10a1 1 0 0 1 -1 -1v-.127l-.155 -.042a4 4 0 0 1 -2.84 -3.631l-.005 -.2v-9a4 4 0 0 1 4 -4v-1a1 1 0 0 1 1 -1zm-.8 12.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBarrierBlockFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-barrier-block" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 21a1 1 0 0 1 0 -2h1v-2h-8v2h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0 -2h1v-2h-1a2 2 0 0 1 -2 -2v-7a2 2 0 0 1 2 -2h1v-1a1 1 0 1 1 2 0v1h8v-1a1 1 0 0 1 2 0v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-1v2h1a1 1 0 0 1 0 2zm-2.086 -13l-7 7h4.17l6.916 -7zm6.086 2.914l-4.086 4.086h4.086zm-10.916 -2.914h-3.084v3.084z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconContrastFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-contrast" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-9 1.732a8 8 0 0 0 4.001 14.928l-.001 -16a8 8 0 0 0 -4 1.072" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlertSquareFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alert-square" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-6.99 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRadarFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-radar" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 10a2 2 0 0 1 1.678 .911l.053 .089h7.269l.117 .007a1 1 0 0 1 .883 .993c0 5.523 -4.477 10 -10 10a1 1 0 0 1 -1 -1v-7.269l-.089 -.053a2 2 0 0 1 -.906 -1.529l-.005 -.149a2 2 0 0 1 2 -2m9.428 -1.334a1 1 0 0 1 -1.884 .668a8 8 0 1 0 -10.207 10.218a1 1 0 0 1 -.666 1.886a10 10 0 1 1 12.757 -12.772m-4.628 -.266a1 1 0 0 1 -1.6 1.2a4 4 0 1 0 -5.6 5.6a1 1 0 0 1 -1.2 1.6a6 6 0 1 1 8.4 -8.4" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSortDescendingShapesFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-sort-descending-shapes" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7 5a1 1 0 0 1 1 1v9.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-9.586a1 1 0 0 1 1 -1m12 8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2zm-1.136 -9.504l3.5 6a1 1 0 0 1 -.864 1.504h-7a1 1 0 0 1 -.864 -1.504l3.5 -6a1 1 0 0 1 1.728 0" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSpadeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-spade" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.327 2.26a1395.065 1395.065 0 0 0 -4.923 4.504c-.626 .6 -1.212 1.21 -1.774 1.843a6.528 6.528 0 0 0 -.314 8.245l.14 .177c1.012 1.205 2.561 1.755 4.055 1.574l.246 -.037l-.706 2.118a1 1 0 0 0 .949 1.316h6l.118 -.007a1 1 0 0 0 .83 -1.31l-.688 -2.065l.104 .02c1.589 .25 3.262 -.387 4.32 -1.785a6.527 6.527 0 0 0 -.311 -8.243a31.787 31.787 0 0 0 -1.76 -1.83l-4.938 -4.518a1 1 0 0 0 -1.348 -.001z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandYoutubeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBubbleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bubble" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.4 2a6.33 6.33 0 0 1 5.491 3.176l.09 .162l.126 .027a6.335 6.335 0 0 1 4.889 5.934l.004 .234a6.333 6.333 0 0 1 -6.333 6.334l-.035 -.002l-.035 .05a5.26 5.26 0 0 1 -3.958 2.08l-.239 .005q -.722 0 -1.404 -.19l-.047 -.014l-3.434 2.061a1 1 0 0 1 -1.509 -.743l-.006 -.114v-2.434l-.121 -.06a3.67 3.67 0 0 1 -1.94 -3.042l-.006 -.197q 0 -.365 .07 -.717l.013 -.058l-.113 -.09a5.8 5.8 0 0 1 -2.098 -4.218l-.005 -.25a5.8 5.8 0 0 1 5.8 -5.8l.058 .001l.15 -.163a6.32 6.32 0 0 1 4.328 -1.967z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPlayerSkipBackFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" /> <path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDropletFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-droplet" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10.708 2.372a2.382 2.382 0 0 0 -.71 .686l-4.892 7.26c-1.981 3.314 -1.22 7.466 1.767 9.882c2.969 2.402 7.286 2.402 10.254 0c2.987 -2.416 3.748 -6.569 1.795 -9.836l-4.919 -7.306c-.722 -1.075 -2.192 -1.376 -3.295 -.686z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPlayerSkipForwardFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-forward" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" /> <path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconXboxXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-xbox-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2 -2.933l2.2 2.933a1 1 0 0 0 1.6 -1.2l-2.55 -3.4l2.55 -3.4a1 1 0 0 0 -.2 -1.4" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGlassFullFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-glass-full" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5.004 10.229l-.003 -.186l.001 -.113l.008 -.071l1 -7a1 1 0 0 1 .877 -.853l.113 -.006h10a1 1 0 0 1 .968 .747l.022 .112l1.006 7.05l.004 .091c0 3.226 -2.56 5.564 -6 5.945v4.055h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-4.055c-3.358 -.371 -5.878 -2.609 -5.996 -5.716zm11.129 -6.229h-8.267l-.607 4.258a6.001 6.001 0 0 1 5.125 .787l.216 .155a4 4 0 0 0 4.32 .31l-.787 -5.51z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBathFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bath" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11 2a1 1 0 0 1 .993 .883l.007 .117v2.25a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.25h-2a1 1 0 0 0 -.993 .883l-.007 .117v6h13a2 2 0 0 1 1.995 1.85l.005 .15v3c0 1.475 -.638 2.8 -1.654 3.715l.486 .73a1 1 0 0 1 -1.594 1.203l-.07 -.093l-.55 -.823a4.98 4.98 0 0 1 -1.337 .26l-.281 .008h-10a4.994 4.994 0 0 1 -1.619 -.268l-.549 .823a1 1 0 0 1 -1.723 -1.009l.059 -.1l.486 -.73a4.987 4.987 0 0 1 -1.647 -3.457l-.007 -.259v-3a2 2 0 0 1 1.85 -1.995l.15 -.005h1v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBoomFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-boom" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7.514 3.836c.151 -.909 1.346 -1.147 1.834 -.366c2.294 3.67 4.275 4.048 5.758 1.083c.471 -.944 1.894 -.608 1.894 .447c0 2.448 1.552 4 4 4c.89 0 1.337 1.077 .707 1.707c-1.61 1.61 -1.61 2.975 0 4.581c.63 .63 .185 1.707 -.706 1.708c-2.448 .003 -3.001 .556 -3.001 3.004c0 .961 -1.223 1.369 -1.8 .6c-2.325 -3.1 -5.494 -2.856 -7.368 -.045c-.503 .754 -1.67 .504 -1.818 -.39c-.365 -2.188 -1.04 -2.656 -4.178 -3.179a1 1 0 0 1 -.543 -1.693c1.618 -1.618 1.618 -3.027 -.053 -4.981l-.009 -.013l-.013 -.014l-.044 -.062l-.01 -.011l-.006 -.013l-.038 -.066l-.017 -.028l-.001 -.004l-.027 -.066l-.019 -.041a1 1 0 0 1 -.051 -.233l-.002 -.045l-.003 -.068a1 1 0 0 1 .06 -.328l.009 -.023l.023 -.049l.011 -.029l.009 -.015l.007 -.016l.019 -.029l.02 -.035l.012 -.017l.013 -.022l.027 -.034l.011 -.016l.018 -.02l.02 -.025l.021 -.02l.015 -.017l.035 -.032l.02 -.019l.009 -.007l.018 -.015l.055 -.039l.018 -.015l.008 -.004l.01 -.007l.061 -.034l.028 -.016l.004 -.002l.063 -.026l.044 -.019a1 1 0 0 1 .115 -.032l.004 -.002l.267 -.063c2.39 -.613 3.934 -2.19 4.411 -4.523z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBellMinusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bell-minus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /> <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004zm2 8h-4l-.117 .007a1 1 0 0 0 .117 1.993h4l.117 -.007a1 1 0 0 0 -.117 -1.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChristmasTreeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-christmas-tree" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 19v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-1zm-10 -1c-.89 0 -1.337 -1.077 -.707 -1.707l2.855 -2.857l-1.464 -.487a1 1 0 0 1 -.472 -1.565l.08 -.091l3.019 -3.02l-.758 -.379a1 1 0 0 1 -.343 -1.507l.083 -.094l4 -4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 -.26 1.601l-.759 .379l3.02 3.02a1 1 0 0 1 -.279 1.61l-.113 .046l-1.465 .487l2.856 2.857c.603 .602 .22 1.614 -.593 1.701l-.114 .006z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLockFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-lock" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPlayerEjectFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-player-eject" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.247 3.341l-7 8c-.565 .647 -.106 1.659 .753 1.659h14c.86 0 1.318 -1.012 .753 -1.659l-7 -8a1 1 0 0 0 -1.506 0z" /> <path d="M18 15h-12a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCopyMinusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-copy-minus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.333 6a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-3.333 -4c1.094 0 1.828 .533 2.374 1.514a1 1 0 1 1 -1.748 .972c-.221 -.398 -.342 -.486 -.626 -.486h-10c-.548 0 -1 .452 -1 1v9.998c0 .32 .154 .618 .407 .805l.1 .065a1 1 0 1 1 -.99 1.738a3 3 0 0 1 -1.517 -2.606v-10c0 -1.652 1.348 -3 3 -3zm2 11h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAnalyzeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-analyze" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4.99 12.862a7.1 7.1 0 0 0 12.171 3.924a1.956 1.956 0 0 1 -.156 -.637l-.005 -.149l.005 -.15a2 2 0 1 1 1.769 2.137a9.099 9.099 0 0 1 -15.764 -4.85a1 1 0 0 1 1.98 -.275z" /> <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" /> <path d="M13.142 3.09a9.1 9.1 0 0 1 7.848 7.772a1 1 0 0 1 -1.98 .276a7.1 7.1 0 0 0 -6.125 -6.064a7.096 7.096 0 0 0 -6.048 2.136a2 2 0 1 1 -3.831 .939l-.006 -.149l.005 -.15a2 2 0 0 1 2.216 -1.838a9.094 9.094 0 0 1 7.921 -2.922z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLabelImportantFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-label-important" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.52 6a2 2 0 0 1 1.561 .75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624a2 2 0 0 1 -1.561 .751h-12.52a1 1 0 0 1 -.78 -1.625l3.5 -4.375l-3.5 -4.375a1 1 0 0 1 .668 -1.62l.112 -.005z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconClubsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-clubs" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2a5 5 0 0 0 -4.488 2.797l-.103 .225a4.998 4.998 0 0 0 -.334 2.837l.027 .14a5 5 0 0 0 -3.091 9.009l.198 .14a4.998 4.998 0 0 0 4.42 .58l.174 -.066l-.773 3.095a1 1 0 0 0 .97 1.243h6l.113 -.006a1 1 0 0 0 .857 -1.237l-.774 -3.095l.174 .065a5 5 0 1 0 1.527 -9.727l.028 -.14a4.997 4.997 0 0 0 -4.925 -5.86z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCarFanFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-car-fan" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.363 2.068l4.912 1.914a2.7 2.7 0 0 1 .68 4.646l-3.045 2.371l6.09 .001a1 1 0 0 1 .932 1.363l-1.914 4.912a2.7 2.7 0 0 1 -4.646 .68l-2.372 -3.047v6.092a1 1 0 0 1 -1.363 .932l-4.912 -1.914a2.7 2.7 0 0 1 -.68 -4.646l3.045 -2.372h-6.09a1 1 0 0 1 -.932 -1.363l1.914 -4.912a2.7 2.7 0 0 1 4.646 -.68l2.371 3.044l.001 -6.089a1 1 0 0 1 1.363 -.932" /> </svg>
		 ),
	},
	{
	 	 key: 'IconKeyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-key" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.52 2c1.029 0 2.015 .409 2.742 1.136l3.602 3.602a3.877 3.877 0 0 1 0 5.483l-2.643 2.643a3.88 3.88 0 0 1 -4.941 .452l-.105 -.078l-5.882 5.883a3 3 0 0 1 -1.68 .843l-.22 .027l-.221 .009h-1.172c-1.014 0 -1.867 -.759 -1.991 -1.823l-.009 -.177v-1.172c0 -.704 .248 -1.386 .73 -1.96l.149 -.161l.414 -.414a1 1 0 0 1 .707 -.293h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .206 -.608l.087 -.1l1.468 -1.469l-.076 -.103a3.9 3.9 0 0 1 -.678 -1.963l-.007 -.236c0 -1.029 .409 -2.015 1.136 -2.742l2.643 -2.643a3.88 3.88 0 0 1 2.741 -1.136m.495 5h-.02a2 2 0 1 0 0 4h.02a2 2 0 1 0 0 -4" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCropLandscapeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-crop-landscape" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconXboxYFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-xbox-y" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.81 3.748l-.01 3.649a1 1 0 0 0 .997 1.003l.117 -.006a1 1 0 0 0 .886 -.991l.01 -3.683l2.79 -3.72a1 1 0 0 0 -.2 -1.4" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCloverFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-clover" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.712 13.297l3.398 3.442a3.104 3.104 0 0 1 0 4.351a3.04 3.04 0 0 1 -4.036 .27l-.075 -.062l-.073 .062a3.04 3.04 0 0 1 -1.664 .634l-.203 .007a3.04 3.04 0 0 1 -2.17 -.91a3.104 3.104 0 0 1 .002 -4.354l3.397 -3.44a1 1 0 0 1 1.424 0m8.378 -5.407a3.04 3.04 0 0 1 .27 4.037l-.062 .073l.062 .075a3.04 3.04 0 0 1 .634 1.664l.007 .203a3.04 3.04 0 0 1 -.91 2.17a3.104 3.104 0 0 1 -4.354 -.002l-3.44 -3.397a1 1 0 0 1 0 -1.424l3.443 -3.399a3.104 3.104 0 0 1 4.351 0m-13.827 .002l3.44 3.397a1 1 0 0 1 0 1.424l-3.444 3.397a3.104 3.104 0 0 1 -4.351 0a3.04 3.04 0 0 1 -.27 -4.036l.062 -.075l-.062 -.073a3.04 3.04 0 0 1 -.634 -1.664l-.007 -.203c0 -.816 .328 -1.598 .91 -2.17a3.104 3.104 0 0 1 4.354 .002m6.678 -5.891a3.04 3.04 0 0 1 2.17 .91a3.104 3.104 0 0 1 -.002 4.354l-3.397 3.44a1 1 0 0 1 -1.424 0l-3.397 -3.444a3.104 3.104 0 0 1 0 -4.351a3.04 3.04 0 0 1 4.036 -.27l.073 .062l.075 -.062a3.04 3.04 0 0 1 1.664 -.634z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCampfireFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-campfire" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19.757 16.03a1 1 0 0 1 .597 1.905l-.111 .035l-16 4a1 1 0 0 1 -.597 -1.905l.111 -.035l16 -4z" /> <path d="M3.03 16.757a1 1 0 0 1 1.098 -.749l.115 .022l16 4a1 1 0 0 1 -.37 1.962l-.116 -.022l-16 -4a1 1 0 0 1 -.727 -1.213z" /> <path d="M13.553 2.106c-4.174 2.086 -6.553 5.358 -6.553 8.894a5 5 0 0 0 10 0c0 -1.047 -.188 -1.808 -.606 -2.705l-.169 -.345l-.33 -.647c-.621 -1.24 -.895 -2.338 -.895 -4.303a1 1 0 0 0 -1.447 -.894z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinRupeeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin-rupee" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 3.66h-6c-1.287 0 -1.332 1.864 -.133 1.993l.133 .007h1a2 2 0 0 1 1.732 1h-2.732a1 1 0 0 0 0 2l2.732 .001a2 2 0 0 1 -1.732 .999h-1c-.89 0 -1.337 1.077 -.707 1.707l3 3a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-1.484 -1.485l.113 -.037a4.009 4.009 0 0 0 2.538 -2.77l1.126 -.001a1 1 0 0 0 0 -2h-1.126a3.973 3.973 0 0 0 -.33 -.855l-.079 -.145h1.535a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSettingsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-settings" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBreadFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bread" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a4 4 0 0 1 3.109 6.516l-.11 .126l.001 8.358a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -3 -3v-8.356l-.116 -.136a4 4 0 0 1 -.728 -3.616l.067 -.21c.532 -1.525 1.93 -2.58 3.601 -2.677l12.079 .001z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAutomaticGearboxFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-automatic-gearbox" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 16a3 3 0 0 1 0 6h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1zm0 4l.117 -.007a1 1 0 0 0 -.117 -1.993zm.5 -13a2.5 2.5 0 1 1 0 5h-.5v1a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1zm-.5 3h.5a.5 .5 0 1 0 0 -1h-.5zm-5 0a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3a2 2 0 0 1 -2 -2v-6h-2a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-2.17a3 3 0 0 1 -2 -2.83l.005 -.176a3 3 0 1 1 3.996 3.005l-.001 2.171z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareRoundedPlusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-plus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutNavbarCollapseFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-navbar-collapse" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm1 6h-14v9a1 1 0 0 0 .883 .993l.117 .007h12a1 1 0 0 0 .993 -.883l.007 -.117v-9zm-6.387 3.21l.094 .083l2 2a1 1 0 0 1 -1.32 1.497l-.094 -.083l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.32 -.083z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconEggCrackedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-egg-cracked" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.236 2.066l-1.694 5.647l-.029 .123a1 1 0 0 0 .406 .978l2.764 1.974l-1.551 2.716a1 1 0 1 0 1.736 .992l2 -3.5l.052 -.105a1 1 0 0 0 -.339 -1.205l-2.918 -2.085l1.623 -5.41c3.641 1.074 6.714 6.497 6.714 11.892c0 4.59 -3.273 7.71 -8 7.917c-4.75 0 -8 -3.21 -8 -7.917c0 -5.654 3.372 -11.344 7.236 -12.017" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAspectRatioFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-aspect-ratio" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3zm-10 3a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-3a1 1 0 0 1 .883 -.993l.117 -.007h3zm9 5a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -.883 .993l-.117 .007h-3a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 .883 -.993l.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconArchiveFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-archive" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M2 3m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" /> <path d="M19 9c.513 0 .936 .463 .993 1.06l.007 .14v7.2c0 1.917 -1.249 3.484 -2.824 3.594l-.176 .006h-10c-1.598 0 -2.904 -1.499 -2.995 -3.388l-.005 -.212v-7.2c0 -.663 .448 -1.2 1 -1.2h14zm-5 2h-4l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h4l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlarmMinusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alarm-minus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-2 5.928h-4l-.117 .007a1 1 0 0 0 .117 1.993h4l.117 -.007a1 1 0 0 0 -.117 -1.993z" /> <path d="M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z" /> <path d="M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMagnetFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-magnet" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M21 9v4a9 9 0 0 1 -18 0v-4h7v4a2 2 0 1 0 4 0v-4zm-3 -7a3 3 0 0 1 3 3v2h-7v-2a3 3 0 0 1 3 -3zm-11 0a3 3 0 0 1 3 3v2h-7v-2a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMailFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mail" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /> <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutAlignMiddleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-align-middle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13 5a3 3 0 0 1 3 3v3h4a1 1 0 0 1 0 2h-4v3a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-3h-4a1 1 0 0 1 0 -2h4v-3a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconShieldFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-shield" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.884 2.007l.114 -.007l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinTakaFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin-taka" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.211 4.384a2 2 0 0 0 -2.683 -.895l-.553 .277a1 1 0 0 0 .894 1.788l.553 -.276l-.001 1.382h-.999a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h.999l.001 3a3 3 0 0 0 2.824 2.995l.176 .005h.5a3.5 3.5 0 0 0 3.5 -3.5v-.5a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .876 .876l.032 .002l-.02 .057a1.5 1.5 0 0 1 -1.395 .948h-.5a1 1 0 0 1 -1 -1l-.001 -3h4.001a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-4.001l.001 -1.382a2 2 0 0 0 -.136 -.725l-.075 -.17z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPinFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-pin" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBandageFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bandage" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20.207 3.793a5.95 5.95 0 0 1 .179 8.228l-.179 .186l-8 8a5.95 5.95 0 0 1 -8.593 -8.228l.179 -.186l8 -8a5.95 5.95 0 0 1 8.414 0zm-8.207 9.207a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm2 -2a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm2 -2a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareCheckFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-check" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.626 7.293a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAppsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-apps" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /> <path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /> <path d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /> <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomQuestionFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-question" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-4 8.928a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1m-1.9 -5.123a1 1 0 0 0 1.433 1.389l.088 -.09a.5 .5 0 1 1 .379 .824a1 1 0 0 0 -.002 2a2.5 2.5 0 1 0 -1.9 -4.123" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBellPlusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bell-plus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /> <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004zm0 6a1 1 0 0 0 -1 1v1h-1l-.117 .007a1 1 0 0 0 .117 1.993h1v1l.007 .117a1 1 0 0 0 1.993 -.117v-1h1l.117 -.007a1 1 0 0 0 -.117 -1.993h-1v-1l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareDotFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-dot" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 8a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 1 0 1.995 -2.15z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandTwitterFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBoltFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bolt" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11l.01 -.013l.018 -.024l.033 -.038l.018 -.022l.009 -.008l.013 -.014l.04 -.036l.028 -.026l.008 -.006a1 1 0 0 1 .402 -.199l.011 -.001l.027 -.005l.074 -.013l.011 -.001l.041 -.002z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandDiscordFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-discord" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandPatreonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-patreon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7.462 3.1c2.615 -1.268 6.226 -1.446 9.063 -.503c2.568 .853 4.471 3.175 4.475 5.81c.004 3.061 -1.942 5.492 -4.896 6.243c-1.693 .43 -2.338 .75 -2.942 1.582c-.238 .328 -.45 .745 -.796 1.533l-.22 .5c-1.146 2.601 -2.156 3.762 -4.236 3.735c-2.232 -.03 -3.603 -1.742 -4.313 -4.48c-.458 -1.768 -.617 -3.808 -.594 -5.876c.044 -3.993 1.42 -7.072 4.46 -8.545z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomPanFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-pan" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 8a4 4 0 0 1 3.447 6.031l2.26 2.262a1 1 0 0 1 -1.414 1.414l-2.262 -2.26a4 4 0 0 1 -6.031 -3.447l.005 -.2a4 4 0 0 1 3.995 -3.8" /> <path d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1 -1.414 1.414l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414z" /> <path d="M19.293 9.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1 -1.414 -1.414l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32z" /> <path d="M3.293 9.293a1 1 0 1 1 1.414 1.414l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-2 -2a1 1 0 0 1 0 -1.414z" /> <path d="M9.293 19.293a1 1 0 0 1 1.414 0l1.293 1.292l1.294 -1.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1 -1.414 0l-2 -2a1 1 0 0 1 0 -1.414" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAdFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-ad" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3zm-10 4a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-1h-2v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-4a3 3 0 0 1 3 -3zm0 2a1 1 0 0 0 -.993 .883l-.007 .117v1h2v-1a1 1 0 0 0 -1 -1zm8 -2a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -.883 .993l-.117 .007h-1.5a2.5 2.5 0 1 1 .326 -4.979l.174 .029v-2.05a1 1 0 0 1 .883 -.993l.117 -.007zm-1.41 5.008l-.09 -.008a.5 .5 0 0 0 -.09 .992l.09 .008h.5v-.5l-.008 -.09a.5 .5 0 0 0 -.318 -.379l-.084 -.023z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBookFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-book" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.088 4.82a10 10 0 0 1 9.412 .314a1 1 0 0 1 .493 .748l.007 .118v13a1 1 0 0 1 -1.5 .866a8 8 0 0 0 -8 0a1 1 0 0 1 -1 0a8 8 0 0 0 -7.733 -.148l-.327 .18l-.103 .044l-.049 .016l-.11 .026l-.061 .01l-.117 .006h-.042l-.11 -.012l-.077 -.014l-.108 -.032l-.126 -.056l-.095 -.056l-.089 -.067l-.06 -.056l-.073 -.082l-.064 -.089l-.022 -.036l-.032 -.06l-.044 -.103l-.016 -.049l-.026 -.11l-.01 -.061l-.004 -.049l-.002 -.068v-13a1 1 0 0 1 .5 -.866a10 10 0 0 1 9.412 -.314l.088 .044l.088 -.044z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodEmptyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-empty" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 10.66h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-5.99 -5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHelpSquareRoundedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-help-square-rounded" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodSadFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-sad" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 9.86a4.5 4.5 0 0 0 -3.214 1.35a1 1 0 1 0 1.428 1.4a2.5 2.5 0 0 1 3.572 0a1 1 0 0 0 1.428 -1.4a4.5 4.5 0 0 0 -3.214 -1.35zm-2.99 -4.2l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareRoundedXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCircleCheckFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBinaryTreeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-binary-tree" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 1a3 3 0 0 1 2.348 4.868l2 3.203q .317 -.071 .652 -.071a3 3 0 1 1 -2.347 1.132l-2 -3.203a3 3 0 0 1 -1.304 0l-2.001 3.203c.408 .513 .652 1.162 .652 1.868s-.244 1.356 -.653 1.868l2.002 3.203q .315 -.071 .651 -.071a3 3 0 1 1 -2.347 1.132l-2.003 -3.203a3 3 0 0 1 -1.302 0l-2.002 3.203a3 3 0 1 1 -1.696 -1.06l2.002 -3.204a3 3 0 0 1 2.998 -4.798l2.002 -3.202a3 3 0 0 1 2.348 -4.868" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBellFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bell" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /> <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconInnerShadowTopFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-inner-shadow-top" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4.929 4.929c3.905 -3.905 10.237 -3.905 14.142 0c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm12.02 2.121a7 7 0 0 0 -9.899 0a1 1 0 0 0 1.414 1.414a5 5 0 0 1 7.072 0a1 1 0 0 0 1.414 -1.414z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDashboardFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-dashboard" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2.954a10 10 0 0 1 6.222 17.829a1 1 0 0 1 -.622 .217h-11.2a1 1 0 0 1 -.622 -.217a10 10 0 0 1 6.222 -17.829m4.207 5.839a1 1 0 0 0 -1.414 0l-2.276 2.274a2.003 2.003 0 0 0 -2.514 1.815l-.003 .118a2 2 0 1 0 3.933 -.517l2.274 -2.276a1 1 0 0 0 0 -1.414" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeHdFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-hd" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-4 4h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3m-5 0a1 1 0 0 0 -1 1v2h-1v-2a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-2h1v2a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1m5 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMedicalCrossFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-medical-cross" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11 2l-.15 .005a2 2 0 0 0 -1.85 1.995v2.803l-2.428 -1.401a2 2 0 0 0 -2.732 .732l-1 1.732l-.073 .138a2 2 0 0 0 .805 2.594l2.427 1.402l-2.427 1.402a2 2 0 0 0 -.732 2.732l1 1.732l.083 .132a2 2 0 0 0 2.649 .6l2.428 -1.402v2.804a2 2 0 0 0 2 2h2l.15 -.005a2 2 0 0 0 1.85 -1.995v-2.804l2.428 1.403a2 2 0 0 0 2.732 -.732l1 -1.732l.073 -.138a2 2 0 0 0 -.805 -2.594l-2.428 -1.403l2.428 -1.402a2 2 0 0 0 .732 -2.732l-1 -1.732l-.083 -.132a2 2 0 0 0 -2.649 -.6l-2.428 1.4v-2.802a2 2 0 0 0 -2 -2h-2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFlagFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-flag" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 5a1 1 0 0 1 .3 -.714a6 6 0 0 1 8.213 -.176l.351 .328a4 4 0 0 0 5.272 0l.249 -.227c.61 -.483 1.527 -.097 1.61 .676l.005 .113v9a1 1 0 0 1 -.3 .714a6 6 0 0 1 -8.213 .176l-.351 -.328a4 4 0 0 0 -5.136 -.114v6.552a1 1 0 0 1 -1.993 .117l-.007 -.117v-16z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGpsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-gps" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-.086 5.066c.372 -.837 -.483 -1.692 -1.32 -1.32l-9 4l-.108 .055c-.75 .44 -.611 1.609 .271 1.83l3.418 .853l.855 3.419c.23 .922 1.498 1.032 1.884 .163z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDeviceHeartMonitorFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-device-heart-monitor" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-4 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm3 0a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-6 -6.764l-.106 .211a1 1 0 0 1 -.77 .545l-.124 .008l-5 -.001v3.001h14v-3.001l-4.382 .001l-.724 1.447a1 1 0 0 1 -1.725 .11l-.063 -.11l-1.106 -2.211zm7 -4.236h-12a1 1 0 0 0 -.993 .883l-.007 .117v1.999l4.381 .001l.725 -1.447a1 1 0 0 1 1.725 -.11l.063 .11l1.106 2.21l.106 -.21a1 1 0 0 1 .77 -.545l.124 -.008l5 -.001v-1.999a1 1 0 0 0 -.883 -.993l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBatteryFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-battery" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 6a3 3 0 0 1 2.995 2.824l.005 .176v.086l.052 .019a1.5 1.5 0 0 1 .941 1.25l.007 .145v3a1.5 1.5 0 0 1 -.948 1.395l-.052 .018v.087a3 3 0 0 1 -2.824 2.995l-.176 .005h-11a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h11z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChessKingFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chess-king" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v1.758a4.49 4.49 0 0 1 2.033 -.734l.24 -.018l.227 -.006a4.5 4.5 0 0 1 4.5 4.5a4.504 4.504 0 0 1 -4.064 4.478l-.217 .016l-.219 .006h-7a4.5 4.5 0 1 1 2.501 -8.241l-.001 -1.759h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z" /> <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBombFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bomb" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.499 3.996a2.2 2.2 0 0 1 1.556 .645l3.302 3.301a2.2 2.2 0 0 1 0 3.113l-.567 .567l.043 .192a8.5 8.5 0 0 1 -3.732 8.83l-.23 .144a8.5 8.5 0 1 1 -2.687 -15.623l.192 .042l.567 -.566a2.2 2.2 0 0 1 1.362 -.636zm-4.499 5.004a4 4 0 0 0 -4 4a1 1 0 0 0 2 0a2 2 0 0 1 2 -2a1 1 0 0 0 0 -2z" /> <path d="M21 2a1 1 0 0 1 .117 1.993l-.117 .007h-1c0 .83 -.302 1.629 -.846 2.25l-.154 .163l-1.293 1.293a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.293 -1.292c.232 -.232 .375 -.537 .407 -.86l.007 -.14a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconStarHalfFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-star-half" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1a.993 .993 0 0 1 .823 .443l.067 .116l2.852 5.781l6.38 .925c.741 .108 1.08 .94 .703 1.526l-.07 .095l-.078 .086l-4.624 4.499l1.09 6.355a1.001 1.001 0 0 1 -1.249 1.135l-.101 -.035l-.101 -.046l-5.693 -3l-5.706 3c-.105 .055 -.212 .09 -.32 .106l-.106 .01a1.003 1.003 0 0 1 -1.038 -1.06l.013 -.11l1.09 -6.355l-4.623 -4.5a1.001 1.001 0 0 1 .328 -1.647l.113 -.036l.114 -.023l6.379 -.925l2.853 -5.78a.968 .968 0 0 1 .904 -.56zm0 3.274v12.476a1 1 0 0 1 .239 .029l.115 .036l.112 .05l4.363 2.299l-.836 -4.873a1 1 0 0 1 .136 -.696l.07 -.099l.082 -.09l3.546 -3.453l-4.891 -.708a1 1 0 0 1 -.62 -.344l-.073 -.097l-.06 -.106l-2.183 -4.424z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBowlFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bowl" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 7a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHelpSquareFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-help-square" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-7 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutDashboardFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-dashboard" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBiohazardFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-biohazard" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.41 2.072a6.25 6.25 0 0 1 1.514 6.387l-.051 .137l.223 .044q .325 .072 .645 .18l.318 .117l.25 .105c2.155 .97 3.572 3.067 3.681 5.483v.217a1.5 1.5 0 1 1 -3 -.003l.002 -.145a3.25 3.25 0 0 0 -4.412 -2.886l-.091 .037l.004 .038l.007 .217a3.5 3.5 0 0 1 -1.817 3.07l-.16 .082l.014 .11c.082 .511 .285 .997 .595 1.416l.14 .175a3.25 3.25 0 0 0 2.27 1.136l.203 .006a1.5 1.5 0 0 1 0 3a6.25 6.25 0 0 1 -4.575 -1.991l-.177 -.199l-.078 .092a6.3 6.3 0 0 1 -3.921 2.054l-.273 .028l-.259 .016h-.217a1.5 1.5 0 1 1 .003 -3l.145 .002a3.25 3.25 0 0 0 3.074 -2.82l.003 -.03l-.161 -.083a3.5 3.5 0 0 1 -1.804 -2.883l-.005 -.195l.006 -.191l.003 -.043l-.075 -.032a3.25 3.25 0 0 0 -2.398 .008l-.191 .084a3.25 3.25 0 0 0 -1.85 2.933a1.5 1.5 0 0 1 -3 0a6.25 6.25 0 0 1 5.036 -6.13l.077 -.014l-.05 -.143l-.08 -.26l-.066 -.25a6.27 6.27 0 0 1 1.47 -5.678l.163 -.172a1.5 1.5 0 1 1 2.171 2.07l-.137 .143a3.25 3.25 0 0 0 .386 4.723l.084 .062l.05 -.034a3.5 3.5 0 0 1 1.673 -.555l.228 -.007c.683 0 1.336 .197 1.894 .556l.048 .033l.067 -.048a3.25 3.25 0 0 0 1.111 -1.669l.05 -.2a3.25 3.25 0 0 0 -.74 -2.828l-.141 -.15a1.5 1.5 0 1 1 2.12 -2.122" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquaresFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-squares" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 7a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3z" /> <path d="M14 2a3 3 0 0 1 3 2.999l-7 .001a5 5 0 0 0 -5 5l-.001 7l-.175 -.005a3 3 0 0 1 -2.824 -2.995v-9a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCategoryFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-category" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" /> <path d="M20 3h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" /> <path d="M10 13h-6a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1z" /> <path d="M17 13a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTrophyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-trophy" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHospitalCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-hospital-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72m2 5a1 1 0 0 0 -1 1v2.999h-2v-2.999a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-3.001h2v3.001a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBowFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bow" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M21 2l.081 .003l.12 .017l.111 .03l.111 .044l.098 .052l.096 .067l.09 .08q .054 .053 .097 .112l.071 .11l.031 .062l.034 .081l.024 .076l.03 .148l.006 .118v4a1 1 0 0 1 -2 0v-1.586l-2.07 2.07c1.301 1.624 2.07 3.706 2.07 6.016c0 2.703 -1.047 5.462 -2.793 7.207a1 1 0 0 1 -1.414 0l-5.543 -5.542l-3.25 3.249v2.586a1 1 0 0 1 -2 0v-2h-2a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h2.584l3.251 -3.25l-5.542 -5.543a1 1 0 0 1 -.002 -1.412c1.745 -1.755 4.489 -2.795 7.209 -2.795c2.31 0 4.393 .768 6.015 2.07l2.069 -2.07h-1.584a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1zm-4.495 6.91l-4.09 4.09l4.595 4.594a9.1 9.1 0 0 0 .985 -3.795l.005 -.299c0 -1.754 -.55 -3.336 -1.495 -4.59m-6.005 -2.91c-1.44 0 -2.89 .36 -4.098 .987l4.598 4.598l4.09 -4.09c-1.254 -.945 -2.836 -1.495 -4.59 -1.495" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDeviceUnknownFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-device-unknown" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 13a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.526 1.292a.98 .98 0 0 1 1.195 -.239a1 1 0 0 1 -.455 1.892a1 1 0 0 0 -.006 2a3 3 0 0 0 1.371 -5.673" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRosetteFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-rosette" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFlaskFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-flask" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 2a1 1 0 0 1 0 2v4.826l3.932 10.814l.034 .077a1.7 1.7 0 0 1 -.002 1.193l-.07 .162a1.7 1.7 0 0 1 -1.213 .911l-.181 .017h-11l-.181 -.017a1.7 1.7 0 0 1 -1.285 -2.266l.039 -.09l3.927 -10.804v-4.823a1 1 0 1 1 0 -2h6zm-2 2h-2v4h2v-4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHeadphonesFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-headphones" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M21 18a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a3 3 0 0 1 2.824 -2.995l.176 -.005h1c.351 0 .688 .06 1 .171v-.171a7 7 0 0 0 -13.996 -.24l-.004 .24v.17c.25 -.088 .516 -.144 .791 -.163l.209 -.007h1a3 3 0 0 1 2.995 2.824l.005 .176v3a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a9 9 0 0 1 17.996 -.265l.004 .265v6z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMushroomFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mushroom" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 15v4a3 3 0 0 1 -5.995 .176l-.005 -.176v-4h6zm-10.1 -2a1.9 1.9 0 0 1 -1.894 -1.752l-.006 -.148c0 -5.023 4.027 -9.1 9 -9.1s9 4.077 9 9.1a1.9 1.9 0 0 1 -1.752 1.894l-.148 .006h-14.2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3zm-9.387 6.21l.094 .083l2.293 2.292l2.293 -2.292a1 1 0 0 1 1.497 1.32l-.083 .094l-2.292 2.293l2.292 2.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 1.32 -1.497z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareAsteriskFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-asterisk" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5.5a1 1 0 0 0 -1 1v1.631l-1.445 -.963l-.101 -.06a1 1 0 0 0 -1.009 1.724l1.75 1.168l-1.75 1.169l-.093 .07a1 1 0 0 0 1.203 1.594l1.445 -.965v1.632l.007 .117a1 1 0 0 0 1.993 -.117v-1.631l1.445 .963l.101 .06a1 1 0 0 0 1.009 -1.724l-1.752 -1.169l1.752 -1.167l.093 -.07a1 1 0 0 0 -1.203 -1.594l-1.445 .962v-1.63l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChartDonutFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chart-donut" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9.883 2.207a1.9 1.9 0 0 1 2.087 1.522l.025 .167l.005 .104v4a1 1 0 0 1 -.641 .933l-.107 .035a3.1 3.1 0 1 0 3.73 3.953l.05 -.173a1 1 0 0 1 .855 -.742l.113 -.006h3.8a2 2 0 0 1 2 2a1 1 0 0 1 -.026 .226a10 10 0 1 1 -12.27 -11.933l.27 -.067l.11 -.02z" /> <path d="M14.775 2.526a.996 .996 0 0 1 .22 -.026l.122 .007l.112 .02l.103 .03a10 10 0 0 1 6.003 5.817l.108 .294a1 1 0 0 1 -.824 1.325l-.119 .007h-4.5a1 1 0 0 1 -.76 -.35a8 8 0 0 0 -.89 -.89a1 1 0 0 1 -.342 -.636l-.008 -.124v-4.495l.006 -.118c.005 -.042 .012 -.08 .02 -.116l.03 -.103a.998 .998 0 0 1 .168 -.299l.071 -.08c.03 -.028 .058 -.052 .087 -.075l.09 -.063l.088 -.05l.103 -.043l.112 -.032z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomExclamationFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-exclamation" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-4 8.928a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m0 -6a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCodeCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-code-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6.293 5.953a1 1 0 0 0 -1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-1.292 -1.293l1.292 -1.293a1 1 0 0 0 0 -1.414m4 0a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l1.292 1.293l-1.292 1.293a1 1 0 0 0 1.414 1.414l2 -2a1 1 0 0 0 0 -1.414z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconVersionsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-versions" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 4h-6a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" /> <path d="M7 6a1 1 0 0 1 .993 .883l.007 .117v10a1 1 0 0 1 -1.993 .117l-.007 -.117v-10a1 1 0 0 1 1 -1z" /> <path d="M4 7a1 1 0 0 1 .993 .883l.007 .117v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-8a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChargingPileFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-charging-pile" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 3a3 3 0 0 1 3 3v4a3 3 0 0 1 3 3v3a.5 .5 0 1 0 1 0v-6.585l-1 -1l-.293 .292a1 1 0 0 1 -1.414 -1.414l.292 -.293l-.292 -.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 .293 .707v7a2.5 2.5 0 1 1 -5 0v-3a1 1 0 0 0 -1 -1v7a1 1 0 0 1 0 2h-12a1 1 0 0 1 0 -2v-13a3 3 0 0 1 3 -3zm-2.486 7.643a1 1 0 0 0 -1.371 .343l-1.5 2.5l-.054 .1a1 1 0 0 0 .911 1.414h1.233l-.59 .986a1 1 0 0 0 1.714 1.028l1.5 -2.5l.054 -.1a1 1 0 0 0 -.911 -1.414h-1.235l.592 -.986a1 1 0 0 0 -.343 -1.371m2.486 -5.643h-6a1 1 0 0 0 -1 1v1h8v-1a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconParkingCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-parking-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72m1.334 5h-3.334a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3h2.334c1.516 0 2.666 -1.38 2.666 -3s-1.15 -3 -2.666 -3m0 2c.323 0 .666 .411 .666 1s-.343 1 -.666 1h-2.334v-2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareRoundedCheckFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-check" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconInfoCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-info-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgesFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badges" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.486 12.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z" /> <path d="M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDialpadFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-dialpad" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /> <path d="M20 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /> <path d="M13 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /> <path d="M6 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /> <path d="M20 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /> <path d="M13 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /> <path d="M13 16h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFileXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-file-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h5zm-1.489 9.14a1 1 0 0 0 -1.301 1.473l.083 .094l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.403 -1.403l-.094 .083l-1.293 1.292l-1.293 -1.292l-.094 -.083l-.102 -.07z" /> <path d="M19 7h-4l-.001 -4.001z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSoupFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-soup" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 10a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z" /> <path d="M11.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833" /> <path d="M15.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833" /> <path d="M7.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandGoogleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-google" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconShieldHalfFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-shield-half" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.998 2l.032 .002l.086 .005a1 1 0 0 1 .342 .104l.105 .062l.097 .076l.016 .015l.247 .21a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.791 -2.75l.046 -.036l.053 -.041a1 1 0 0 1 .217 -.112l.075 -.023l.036 -.01a1 1 0 0 1 .12 -.022l.086 -.005zm.002 2.296l-.176 .135a13 13 0 0 1 -7.288 2.572l-.264 .006l-.064 .31a11 11 0 0 0 1.064 7.175l.17 .314a11 11 0 0 0 6.49 5.136l.068 .019z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHexagonMinusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-hexagon-minus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13.666 1.429l6.75 3.98l.096 .063l.093 .078l.106 .074a3.22 3.22 0 0 1 1.284 2.39l.005 .204v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.23 3.23 0 0 1 -1.678 -2.826v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098c1 -.552 2.214 -.552 3.24 .015m1.334 9.571h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBatteryVerticalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-battery-vertical" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13.5 3a1.5 1.5 0 0 1 1.395 .948l.018 .052h.087a3 3 0 0 1 2.995 2.824l.005 .176v11a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-11a3 3 0 0 1 3 -3h.086l.019 -.052a1.5 1.5 0 0 1 1.25 -.941l.145 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomInFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-in" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 2.928a1 1 0 0 0 -.993 .883l-.007 .117v2h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2v2l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-2h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMacroFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-macro" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.994 2.888l.006 .112v3a6 6 0 0 1 -5 5.916v4.186a6.98 6.98 0 0 1 5 -2.102a1 1 0 0 1 1 1a7 7 0 0 1 -14 0a1 1 0 0 1 1 -1c1.96 0 3.731 .805 5.002 2.103l-.002 -4.186a6 6 0 0 1 -5 -5.917v-3a1 1 0 0 1 1.555 -.832l2.317 1.544l1.42 -1.42a1 1 0 0 1 1.32 -.082l.095 .083l1.42 1.419l2.318 -1.544a1 1 0 0 1 1.55 .72m-10.865 13.24l.03 .134a5.01 5.01 0 0 0 3.71 3.61a5 5 0 0 0 -3.74 -3.744m9.742 .002l-.134 .03a5.01 5.01 0 0 0 -3.61 3.71a5 5 0 0 0 3.744 -3.74" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAssetFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-asset" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2a3 3 0 0 1 2.86 3.91l-.107 .291l-.046 .093q -.061 .128 -.134 .25l-6.476 11.909a1 1 0 0 1 -.066 .104a7 7 0 0 1 -13.031 -3.557l.004 -.24a7 7 0 0 1 3.342 -5.732l.256 -.15l11.705 -6.355q .18 -.123 .378 -.22l.215 -.096l.136 -.048c.302 -.103 .627 -.159 .964 -.159m-10 10a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3m7.04 -6.512l-5.12 2.778a7.01 7.01 0 0 1 4.816 4.824l2.788 -5.128a3 3 0 0 1 -2.485 -2.474m2.961 -1.488a1 1 0 0 0 -.317 .051l-.31 .17a1 1 0 1 0 1.465 1.325l.072 -.13a1 1 0 0 0 -.91 -1.416" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPlayerPauseFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMichelinStarFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-michelin-star" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.81 2c2.018 0 3.478 1.232 3.874 3.129l.016 .089l.172 -.057c.34 -.104 .684 -.16 1.055 -.175l.227 -.005c2.09 0 3.925 1.93 3.925 4.094c0 1.095 -.51 2.087 -1.364 2.835l-.118 .098l.06 .048c.88 .737 1.36 1.605 1.416 2.656l.006 .213c0 2.24 -1.739 4.094 -3.925 4.094c-.445 0 -.923 -.084 -1.374 -.233l-.043 .193c-.395 1.736 -1.806 2.933 -3.662 3.016l-.208 .005c-2.018 0 -3.477 -1.232 -3.873 -3.13l-.03 -.161l-.011 .006a4.1 4.1 0 0 1 -1.26 .243l-.226 .005c-2.09 0 -3.925 -1.93 -3.925 -4.094c0 -1.096 .51 -2.087 1.378 -2.84l.073 -.062l-.03 -.023c-.88 -.737 -1.359 -1.605 -1.415 -2.656l-.006 -.213c0 -2.239 1.74 -4.094 3.925 -4.094c.44 0 .92 .098 1.391 .27l.036 .013l.008 -.048c.331 -1.84 1.776 -3.125 3.7 -3.211z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPlayerTrackNextFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-player-track-next" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" /> <path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconInnerShadowBottomFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-inner-shadow-bottom" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5.144 4.72c3.92 -3.695 10.093 -3.625 13.927 .209c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm3.32 10.816a1 1 0 1 0 -1.414 1.414a7 7 0 0 0 9.9 0a1 1 0 0 0 -1.414 -1.414a5 5 0 0 1 -7.072 0z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconThumbDownFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-thumb-down" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13 21.008a3 3 0 0 0 2.995 -2.823l.005 -.177v-4h2a3 3 0 0 0 2.98 -2.65l.015 -.173l.005 -.177l-.02 -.196l-1.006 -5.032c-.381 -1.625 -1.502 -2.796 -2.81 -2.78l-.164 .008h-8a1 1 0 0 0 -.993 .884l-.007 .116l.001 9.536a1 1 0 0 0 .5 .866a2.998 2.998 0 0 1 1.492 2.396l.007 .202v1a3 3 0 0 0 3 3z" /> <path d="M5 14.008a1 1 0 0 0 .993 -.883l.007 -.117v-9a1 1 0 0 0 -.883 -.993l-.117 -.007h-1a2 2 0 0 0 -1.995 1.852l-.005 .15v7a2 2 0 0 0 1.85 1.994l.15 .005h1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDeviceTabletFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-device-tablet" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 2a2 2 0 0 1 1.995 1.85l.005 .15v16a2 2 0 0 1 -1.85 1.995l-.15 .005h-12a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-16a2 2 0 0 1 1.85 -1.995l.15 -.005h12zm-6 13a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGuitarPickFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-guitar-pick" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c-1.613 0 -2.882 .104 -3.825 .323l-.23 .057c-3.019 .708 -4.945 2.503 -4.945 5.62c0 3.367 1.939 8.274 4.22 11.125c.32 .4 .664 .786 1.03 1.158l.367 .36a4.904 4.904 0 0 0 6.752 .011a15.04 15.04 0 0 0 1.41 -1.528c2.491 -3.113 4.221 -7.294 4.221 -11.126c0 -3.025 -1.813 -4.806 -4.71 -5.562l-.266 -.066c-.936 -.25 -2.281 -.372 -4.024 -.372z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconNavigationFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-navigation" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.092 2.581a1 1 0 0 1 1.754 -.116l.062 .116l8.005 17.365c.198 .566 .05 1.196 -.378 1.615a1.53 1.53 0 0 1 -1.459 .393l-7.077 -2.398l-6.899 2.338a1.535 1.535 0 0 1 -1.52 -.231l-.112 -.1c-.398 -.386 -.556 -.954 -.393 -1.556l.047 -.15l7.97 -17.276z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBookmarksFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bookmarks" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 6a4 4 0 0 1 4 4v11a1 1 0 0 1 -1.514 .857l-4.486 -2.691l-4.486 2.691a1 1 0 0 1 -1.508 -.743l-.006 -.114v-11a4 4 0 0 1 4 -4h4z" /> <path d="M16 2a4 4 0 0 1 4 4v11a1 1 0 0 1 -2 0v-11a2 2 0 0 0 -2 -2h-5a1 1 0 0 1 0 -2h5z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMickeyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mickey" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.501 2a4.5 4.5 0 0 1 .878 8.913a8 8 0 1 1 -15.374 3.372l-.005 -.285l.005 -.285a7.991 7.991 0 0 1 .615 -2.803a4.5 4.5 0 0 1 -3.187 -6.348a4.505 4.505 0 0 1 3.596 -2.539l.225 -.018l.281 -.007l.244 .009a4.5 4.5 0 0 1 4.215 4.247a8.001 8.001 0 0 1 4.013 0a4.5 4.5 0 0 1 4.493 -4.256z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMailOpenedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mail-opened" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.872 14.287l6.522 6.52a2.996 2.996 0 0 1 -2.218 1.188l-.176 .005h-14a2.995 2.995 0 0 1 -2.394 -1.191l6.521 -6.522l2.318 1.545l.116 .066a1 1 0 0 0 .878 0l.116 -.066l2.317 -1.545z" /> <path d="M2 9.535l5.429 3.62l-5.429 5.43z" /> <path d="M22 9.535v9.05l-5.43 -5.43z" /> <path d="M12.44 2.102l.115 .066l8.444 5.629l-8.999 6l-9 -6l8.445 -5.63a1 1 0 0 1 .994 -.065z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlignBoxBottomCenterFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-align-box-bottom-center" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-9.333 13a1 1 0 0 0 -1 1v2l.007 .117a1 1 0 0 0 1.993 -.117v-2l-.007 -.117a1 1 0 0 0 -.993 -.883zm3 -4a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 1.993 -.117v-6l-.007 -.117a1 1 0 0 0 -.993 -.883zm3 2a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTriangleSquareCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-triangle-square-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.132 2.504l-4 7a1 1 0 0 0 .868 1.496h8a1 1 0 0 0 .868 -1.496l-4 -7a1 1 0 0 0 -1.736 0z" /> <path d="M17 13a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" /> <path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBladeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-blade" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.586 3a2 2 0 0 1 2.828 0l.586 .585l.586 -.585a2 2 0 0 1 2.7 -.117l.128 .117l2.586 2.586a2 2 0 0 1 0 2.828l-.586 .586l.586 .586a2 2 0 0 1 0 2.828l-8.586 8.586a2 2 0 0 1 -2.828 0l-.586 -.586l-.586 .586a2 2 0 0 1 -2.828 0l-2.586 -2.586a2 2 0 0 1 0 -2.828l.585 -.587l-.585 -.585a2 2 0 0 1 -.117 -2.7l.117 -.129zm3.027 4.21a1 1 0 0 0 -1.32 1.497l.292 .293l-1.068 1.067a2.003 2.003 0 0 0 -2.512 1.784l-.005 .149l.005 .15c.01 .125 .03 .248 .062 .367l-1.067 1.068l-.293 -.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l.292 .293l-.292 .293l-.083 .094a1 1 0 0 0 1.497 1.32l.293 -.292l.293 .292l.094 .083a1 1 0 0 0 1.32 -1.497l-.292 -.293l1.069 -1.067a2.003 2.003 0 0 0 2.449 -2.45l1.067 -1.068l.293 .292l.094 .083a1 1 0 0 0 1.32 -1.497l-.292 -.293l.292 -.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-.293 .292l-.293 -.292z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAppWindowFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-app-window" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v13a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-13a1 1 0 0 0 -1.514 -.857z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconShieldCheckeredFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-shield-checkered" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.013 12v9.754a13 13 0 0 1 -8.733 -9.754h8.734zm9.284 3.794a13 13 0 0 1 -7.283 5.951l-.001 -9.745h8.708a12.96 12.96 0 0 1 -1.424 3.794zm-9.283 -13.268l-.001 7.474h-8.986c-.068 -1.432 .101 -2.88 .514 -4.282a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.192 -2.256l.276 -.219zm1.999 7.474v-7.453l-.09 -.073a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717c.413 1.403 .582 2.85 .514 4.282h-8.96z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHelpTriangleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-help-triangle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm0 13.33a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMessageFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-message" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAwardFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-award" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19.496 13.983l1.966 3.406a1.001 1.001 0 0 1 -.705 1.488l-.113 .011l-.112 -.001l-2.933 -.19l-1.303 2.636a1.001 1.001 0 0 1 -1.608 .26l-.082 -.094l-.072 -.11l-1.968 -3.407a8.994 8.994 0 0 0 6.93 -3.999z" /> <path d="M11.43 17.982l-1.966 3.408a1.001 1.001 0 0 1 -1.622 .157l-.076 -.1l-.064 -.114l-1.304 -2.635l-2.931 .19a1.001 1.001 0 0 1 -1.022 -1.29l.04 -.107l.05 -.1l1.968 -3.409a8.994 8.994 0 0 0 6.927 4.001z" /> <path d="M12 2l.24 .004a7 7 0 0 1 6.76 6.996l-.003 .193l-.007 .192l-.018 .245l-.026 .242l-.024 .178a6.985 6.985 0 0 1 -.317 1.268l-.116 .308l-.153 .348a7.001 7.001 0 0 1 -12.688 -.028l-.13 -.297l-.052 -.133l-.08 -.217l-.095 -.294a6.96 6.96 0 0 1 -.093 -.344l-.06 -.271l-.049 -.271l-.02 -.139l-.039 -.323l-.024 -.365l-.006 -.292a7 7 0 0 1 6.76 -6.996l.24 -.004z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomOutFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-out" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-1 5.928h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBabyCarriageFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-baby-carriage" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.5 2a6.5 6.5 0 0 1 6.49 6.858a1.04 1.04 0 0 1 -.04 .456a6.51 6.51 0 0 1 -3.757 5.103l.532 1.595q .135 -.012 .275 -.012a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 .894 -1.966l-.634 -1.903q -.377 .045 -.765 .045h-2.675q -.547 0 -1.076 -.083l-.648 1.941a3 3 0 1 1 -5.101 2.142l.004 -.176a3 3 0 0 1 3.27 -2.812l.56 -1.682a7 7 0 0 1 -3.652 -4.117l-1.402 -4.213h-1.78a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h2.5a1 1 0 0 1 .949 .684l1.104 3.316h6.447v-5a1 1 0 0 1 1 -1zm-6.5 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodCrazyHappyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-crazy-happy" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-1.8 10.946a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-7.493 -6.493a1 1 0 0 0 -1.414 1.414l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l.793 -.792l.793 .792a1 1 0 1 0 1.414 -1.414l-.792 -.793l.792 -.793a1 1 0 1 0 -1.414 -1.414l-.793 .792zm7 0a1 1 0 0 0 -1.414 1.414l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l.793 -.792l.793 .792a1 1 0 0 0 1.414 -1.414l-.792 -.793l.792 -.793a1 1 0 1 0 -1.414 -1.414l-.793 .792z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBarbellFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-barbell" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 7a1 1 0 0 1 1 1v8a1 1 0 0 1 -2 0v-3h-1a1 1 0 0 1 0 -2h1v-3a1 1 0 0 1 1 -1" /> <path d="M20 7a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1 -2 0v-8a1 1 0 0 1 1 -1" /> <path d="M16 5a2 2 0 0 1 2 2v10a2 2 0 1 1 -4 0v-4h-4v4a2 2 0 1 1 -4 0v-10a2 2 0 1 1 4 0v4h4v-4a2 2 0 0 1 2 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlarmSnoozeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alarm-snooze" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-2 3.928h-4l-.117 .007a1 1 0 0 0 -.883 .993l.007 .117a1 1 0 0 0 .993 .883h1.584l-2.291 2.293l-.076 .084c-.514 .637 -.07 1.623 .783 1.623h4l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.993 -.883h-1.586l2.293 -2.293l.076 -.084c.514 -.637 .07 -1.623 -.783 -1.623z" /> <path d="M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z" /> <path d="M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBoxAlignTopFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-box-align-top" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 3.005h-14a2 2 0 0 0 -2 2v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-5a2 2 0 0 0 -2 -2z" /> <path d="M4 13.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M4 18.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M9 18.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M15 18.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M20 18.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M20 13.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlignBoxCenterMiddleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-align-box-center-middle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.993 -2.802l-.007 -.198v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-6 12h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm2 -3h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-1 -3h-4l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h4l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -1 1a3 3 0 1 0 0 6v2a1.024 1.024 0 0 1 -.866 -.398l-.068 -.101a1 1 0 0 0 -1.732 .998a3 3 0 0 0 2.505 1.5h.161a1 1 0 0 0 .883 .994l.117 .007a1 1 0 0 0 1 -1l.176 -.005a3 3 0 0 0 -.176 -5.995v-2c.358 -.012 .671 .14 .866 .398l.068 .101a1 1 0 0 0 1.732 -.998a3 3 0 0 0 -2.505 -1.501h-.161a1 1 0 0 0 -1 -1zm1 7a1 1 0 0 1 0 2v-2zm-2 -4v2a1 1 0 0 1 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconForbidFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-forbid" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-7.387 4.87a1 1 0 0 0 -1.32 1.497l6 6l.094 .083a1 1 0 0 0 1.32 -1.497l-6 -6z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTransitionTopFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-transition-top" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 6l.081 .003l.12 .017l.111 .03l.111 .044l.098 .052l.104 .074l.082 .073l3 3a1 1 0 1 1 -1.414 1.414l-1.293 -1.292v4.585h5a4 4 0 1 1 0 8h-12a4 4 0 1 1 0 -8h5v-4.585l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414l3 -3l.112 -.097l.11 -.071l.062 -.031l.081 -.034l.076 -.024l.118 -.025l.058 -.007zm6 -4a4 4 0 0 1 4 4a1 1 0 0 1 -1.993 .117l-.007 -.117a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a1 1 0 1 1 -2 0a4 4 0 0 1 4 -4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBoxMultipleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-box-multiple" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 5.667a3.667 3.667 0 0 1 3.667 -3.667h8.666a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667z" /> <path d="M2 9c0 -1.094 .533 -1.828 1.514 -2.374a1 1 0 1 1 .972 1.748c-.398 .221 -.486 .342 -.486 .626v10c0 .548 .452 1 1 1h9.998c.32 0 .618 -.154 .805 -.407l.065 -.1a1 1 0 1 1 1.738 .99a3 3 0 0 1 -2.606 1.517h-10c-1.652 0 -3 -1.348 -3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconArticleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-article" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-2 12h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm0 -4h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm0 -4h-10l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h10l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTableFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-table" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a1 1 0 0 1 1 -1z" /> <path d="M21 12v6a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1z" /> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h6z" /> <path d="M9 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2a1 1 0 0 1 1 1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPresentationAnalyticsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-presentation-analytics" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1 -3 3h-5v2h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2h2v-2h-5a3 3 0 0 1 -3 -3v-9a1 1 0 1 1 0 -2zm-12 4a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m6 2a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1 -1m-3 1a1 1 0 0 0 -1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChartAreaLineFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chart-area-line" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15.22 9.375a1 1 0 0 1 1.393 -.165l.094 .083l4 4a1 1 0 0 1 .284 .576l.009 .131v5a1 1 0 0 1 -.883 .993l-.117 .007h-16.022l-.11 -.009l-.11 -.02l-.107 -.034l-.105 -.046l-.1 -.059l-.094 -.07l-.06 -.055l-.072 -.082l-.064 -.089l-.054 -.096l-.016 -.035l-.04 -.103l-.027 -.106l-.015 -.108l-.004 -.11l.009 -.11l.019 -.105c.01 -.04 .022 -.077 .035 -.112l.046 -.105l.059 -.1l4 -6a1 1 0 0 1 1.165 -.39l.114 .05l3.277 1.638l3.495 -4.369z" /> <path d="M15.232 3.36a1 1 0 0 1 1.382 -.15l.093 .083l4 4a1 1 0 0 1 -1.32 1.497l-.094 -.083l-3.226 -3.225l-4.299 5.158a1 1 0 0 1 -1.1 .303l-.115 -.049l-3.254 -1.626l-2.499 3.332a1 1 0 0 1 -1.295 .269l-.105 -.069a1 1 0 0 1 -.269 -1.295l.069 -.105l3 -4a1 1 0 0 1 1.137 -.341l.11 .047l3.291 1.645l4.494 -5.391z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBallpenFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-ballpen" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.828 2a3 3 0 0 1 1.977 .743l.145 .136l1.171 1.17a3 3 0 0 1 .136 4.1l-.136 .144l-1.706 1.707l2.292 2.293a1 1 0 0 1 .083 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.292 -3.293l-1.586 -1.585l-7.464 7.464a3.828 3.828 0 0 1 -2.474 1.114l-.233 .008c-.674 0 -1.33 -.178 -1.905 -.508l-1.216 1.214a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.214 -1.216a3.828 3.828 0 0 1 .454 -4.442l.16 -.17l10.586 -10.586a3 3 0 0 1 1.923 -.873l.198 -.006zm0 2a1 1 0 0 0 -.608 .206l-.099 .087l-1.707 1.707l2.586 2.585l1.707 -1.706a1 1 0 0 0 .284 -.576l.01 -.131a1 1 0 0 0 -.207 -.609l-.087 -.099l-1.171 -1.171a1 1 0 0 0 -.708 -.293z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBowlSpoonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bowl-spoon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 10a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z" /> <path d="M8 2c1.71 0 3.237 .787 3.785 2h8.215a1 1 0 0 1 0 2l-8.216 .001c-.548 1.213 -2.074 1.999 -3.784 1.999c-2.144 0 -4 -1.237 -4 -3s1.856 -3 4 -3" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTransitionBottomFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-transition-bottom" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M21 17a1 1 0 0 1 1 1a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4a1 1 0 0 1 2 0a2 2 0 0 0 2 2h12a2 2 0 0 0 1.995 -1.85l.005 -.15a1 1 0 0 1 1 -1m-9 1l-.082 -.004l-.119 -.016l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-4.586h-5a4 4 0 1 1 0 -8h12a4 4 0 1 1 0 8h-5v4.583l1.293 -1.29a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3l-.112 .097l-.11 .071l-.062 .031l-.081 .034l-.076 .024l-.149 .03z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPanoramaVerticalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-panorama-vertical" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.53 2c1.39 0 2.364 1.389 1.87 2.692l-.013 .026l-.156 .431c-1.623 4.572 -1.622 9.123 .003 13.703l.168 .458a2 2 0 0 1 -1.873 2.69h-11c-1.386 0 -2.394 -1.386 -1.897 -2.694c1.845 -4.879 1.845 -9.734 0 -14.612c-.495 -1.304 .48 -2.694 1.87 -2.694z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCameraFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-camera" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 3a2 2 0 0 1 1.995 1.85l.005 .15a1 1 0 0 0 .883 .993l.117 .007h1a3 3 0 0 1 2.995 2.824l.005 .176v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9a3 3 0 0 1 2.824 -2.995l.176 -.005h1a1 1 0 0 0 1 -1a2 2 0 0 1 1.85 -1.995l.15 -.005h6zm-3 7a3 3 0 0 0 -2.985 2.698l-.011 .152l-.004 .15l.004 .15a3 3 0 1 0 2.996 -3.15z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconStarsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-stars" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z" /> <path d="M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z" /> <path d="M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLockSquareRoundedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-lock-square-rounded" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm0 4a3 3 0 0 1 2.995 2.824l.005 .176v1a2 2 0 0 1 1.995 1.85l.005 .15v3a2 2 0 0 1 -1.85 1.995l-.15 .005h-6a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 1.85 -1.995l.15 -.005v-1a3 3 0 0 1 3 -3zm3 6h-6v3h6v-3zm-3 -4a1 1 0 0 0 -.993 .883l-.007 .117v1h2v-1a1 1 0 0 0 -1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBlenderFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-blender" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 14c.899 0 1.728 .296 2.396 .797l-.12 -.086q .101 .069 .196 .144l-.076 -.058q .07 .053 .14 .109l-.064 -.05q .072 .055 .14 .115l-.077 -.065a4 4 0 0 1 .565 .566l-.065 -.078q .061 .072 .12 .147l-.055 -.07q .057 .071 .111 .144l-.056 -.074q .066 .084 .127 .172l-.07 -.098q .058 .078 .112 .16l-.042 -.062q .054 .078 .104 .157l-.062 -.096q .06 .09 .117 .185l-.055 -.089l.09 .15l-.035 -.061a4 4 0 0 1 .338 .727l-.055 -.15q .039 .1 .073 .201l-.018 -.051q .033 .093 .06 .188l-.042 -.137q .033 .1 .061 .204l-.019 -.067q .027 .091 .05 .184l-.03 -.117q .03 .114 .055 .23l-.025 -.113q .026 .107 .045 .215l-.02 -.101q .021 .1 .037 .201l-.017 -.1q .018 .095 .03 .19l-.013 -.09a4 4 0 0 1 .026 .196l.017 .205l.006 .226v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-2q 0 -.273 .036 -.537l-.013 .105a4 4 0 0 1 .026 -.194l-.013 .09a4 4 0 0 1 .03 -.191l-.017 .1q .015 -.1 .037 -.2l-.02 .1q .02 -.108 .046 -.215l-.026 .114q .024 -.117 .056 -.23l-.03 .116a4 4 0 0 1 .049 -.184l-.02 .067q .03 -.104 .062 -.204l-.042 .137q .027 -.096 .06 -.188l-.018 .051a4 4 0 0 1 .32 -.717l-.064 .117q .048 -.09 .1 -.178l-.035 .06l.09 -.15l-.055 .09q .055 -.094 .117 -.185l-.062 .096q .05 -.08 .104 -.157l-.042 .061q .054 -.08 .113 -.16l-.071 .1q .06 -.09 .127 -.173l-.056 .074q .054 -.073 .111 -.143l-.055 .069a4 4 0 0 1 .542 -.57l-.072 .064q .073 -.066 .15 -.129l-.078 .065a4 4 0 0 1 .14 -.116l-.062 .051q .068 -.056 .139 -.11l-.076 .06q .096 -.076 .195 -.145l-.12 .086q .07 -.053 .142 -.101l-.022 .015q .072 -.05 .145 -.096a4 4 0 0 1 2.132 -.615zm-2 3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1m1 -15a1 1 0 0 1 1 .999l1.802 .001a2 2 0 0 1 1.968 2.358l-1.49 8.191a5 5 0 0 0 -2.28 -.549h-4c-.822 0 -1.597 .198 -2.28 .55l-.464 -2.551l-2.256 .001a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2l5 -.001l.007 -.116a1 1 0 0 1 .993 -.883zm-6.835 2.999l-1.165 .001v4l1.893 -.001z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomInAreaFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-in-area" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.817 -2.816a6 6 0 0 1 -9.472 -4.666l-.004 -.225l.004 -.225a6 6 0 0 1 5.996 -5.775zm0 3a1 1 0 0 0 -.993 .883l-.007 .117v1h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h1v1l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-1h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-1v-1l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> <path d="M3 14a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 0 .883 .993l.117 .007h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-1a1 1 0 0 1 1 -1z" /> <path d="M3 9a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /> <path d="M6 2a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 0 -.993 .883l-.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a3 3 0 0 1 2.824 -2.995l.176 -.005h1z" /> <path d="M11 2a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M16 2a3 3 0 0 1 2.995 2.824l.005 .176v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 0 -.883 -.993l-.117 -.007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodKidFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-kid" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 7.046 -9.232a3 3 0 0 0 2.949 3.556a1 1 0 0 0 0 -2l-.117 -.007a1 1 0 0 1 .117 -1.993c1.726 0 3.453 .447 5 1.34zm-1.8 10.946a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414zm-6.19 -5.286l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm6 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinMoneroFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin-monero" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 11.414v4.586a1 1 0 0 0 1 1l4.66 .001a10 10 0 0 1 -17.32 0l4.66 -.001l.117 -.007a1 1 0 0 0 .883 -.993v-4.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.293zm2 -8.074a10 10 0 0 1 4.54 11.66h-4.54v-6c0 -.89 -1.077 -1.337 -1.707 -.707l-3.293 3.292l-3.293 -3.292l-.084 -.076c-.637 -.514 -1.623 -.07 -1.623 .783v6h-4.54a9.991 9.991 0 0 1 -.46 -3l.005 -.324a10 10 0 0 1 14.995 -8.336z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBoxAlignBottomFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-box-align-bottom" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 13h-16a1 1 0 0 0 -1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-5a1 1 0 0 0 -1 -1z" /> <path d="M4 8a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M4 3a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M9 3a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M15 3a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M20 3a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> <path d="M20 8a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDeviceMobileFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-device-mobile" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-8a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h8zm-4 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1 -12h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareRoundedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconEggFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-egg" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.002 2c-4.173 -.008 -8.002 6.058 -8.002 12.083c0 4.708 3.25 7.917 8 7.917c4.727 -.206 8 -3.328 8 -7.917c0 -6.02 -3.825 -12.075 -7.998 -12.083z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGlassFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-glass" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c3.205 0 5.894 1.05 5.997 2.89l.99 5.946l.013 .164c0 3.226 -2.56 5.564 -6 5.945v3.055h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0 -2h3v-3.055c-3.44 -.38 -6 -2.719 -6 -5.945l.014 -.164l.991 -5.955l.001 -.038c.146 -1.81 2.817 -2.843 5.994 -2.843m0 2c-1.224 0 -2.359 .192 -3.164 .514c-.594 .238 -.836 .467 -.836 .486c0 .02 .242 .248 .836 .486c.804 .322 1.94 .514 3.164 .514s2.359 -.192 3.164 -.514c.594 -.238 .836 -.467 .836 -.486l-.02 -.026c-.07 -.07 -.321 -.262 -.816 -.46c-.804 -.322 -1.94 -.514 -3.164 -.514" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBatteryAutomotiveFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-battery-automotive" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 2a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3v-1a1 1 0 1 1 2 0v1h10v-1a1 1 0 0 1 1 -1m-2 7.5a1 1 0 0 0 -1 1v.5h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0v-.5h.5a1 1 0 0 0 0 -2h-.5v-.5a1 1 0 0 0 -1 -1m-6.5 1.5h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconExclamationCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFeatherFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-feather" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 9.585v6.415h6.414l-2.707 2.707a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006h-4.586l-1.707 1.707a1 1 0 1 1 -1.414 -1.414l1.707 -1.709v-4.584l.003 -.075l.017 -.126l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09z" /> <path d="M19.414 11l-3 3h-4.914l2.914 -3z" /> <path d="M13 4.586v4.998l-3 3v-4.999z" /> <path d="M16.482 3a4.515 4.515 0 0 1 4.518 4.514a4.7 4.7 0 0 1 -.239 1.487l-5.761 -.001v-5.76c.469 -.158 .968 -.24 1.482 -.24" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTrashFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-trash" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /> <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSortAscendingShapesFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-sort-ascending-shapes" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7 5a1 1 0 0 1 1 1v9.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-9.586a1 1 0 0 1 1 -1m12 -2a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2zm-1.136 10.496l3.5 6a1 1 0 0 1 -.864 1.504h-7a1 1 0 0 1 -.864 -1.504l3.5 -6a1 1 0 0 1 1.728 0" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandAppleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-apple" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" /> <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodAngryFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-angry" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10a10 10 0 1 1 0 -20m0 12a4.5 4.5 0 0 0 -3.214 1.35a1 1 0 1 0 1.428 1.4a2.5 2.5 0 0 1 3.572 0a1 1 0 0 0 1.428 -1.4a4.5 4.5 0 0 0 -3.214 -1.35m-3.553 -5.895a1 1 0 0 0 -.894 1.788l2 1a1 1 0 0 0 .894 -1.788zm8.447 .447a1 1 0 0 0 -1.341 -.447l-2 1a1 1 0 0 0 .894 1.788l2 -1a1 1 0 0 0 .447 -1.341" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandFacebookFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChartDotsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chart-dots" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1z" /> <path d="M19 4a3 3 0 1 1 -.651 5.93l-2.002 3.202a3 3 0 1 1 -4.927 .337l-1.378 -1.655a3 3 0 1 1 1.538 -1.282l1.378 1.654a2.994 2.994 0 0 1 1.693 -.115l2.002 -3.203a3 3 0 0 1 2.347 -4.868z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAffiliateFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-affiliate" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.5 3a2.5 2.5 0 1 1 -.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624 .787a2.5 2.5 0 1 1 -.575 1.916l-2.623 -.788a5.5 5.5 0 0 1 -10.39 -2.29l-.004 -.222l.004 -.221a5.5 5.5 0 0 1 2.984 -4.673l-.788 -2.624a2.498 2.498 0 0 1 -2.194 -2.304l-.006 -.178l.005 -.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714 .936l4.555 -4.556a2.487 2.487 0 0 1 -.167 -.748l-.005 -.164l.005 -.164a2.5 2.5 0 0 1 2.495 -2.336z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAccessibleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-accessible" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.051 6.844a1 1 0 0 0 -1.152 -.663l-.113 .03l-2.684 .895l-2.684 -.895l-.113 -.03a1 1 0 0 0 -.628 1.884l.109 .044l2.316 .771v.976l-1.832 2.75l-.06 .1a1 1 0 0 0 .237 1.21l.1 .076l.101 .06a1 1 0 0 0 1.21 -.237l.076 -.1l1.168 -1.752l1.168 1.752l.07 .093a1 1 0 0 0 1.653 -1.102l-.059 -.1l-1.832 -2.75v-.977l2.316 -.771l.109 -.044a1 1 0 0 0 .524 -1.221zm-3.949 -4.184a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCirclePlusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBongFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bong" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 2a1 1 0 0 1 0 2v5.587l2.293 -2.294a1 1 0 0 1 1.32 -.083l.094 .083l2 2a1 1 0 0 1 0 1.414l-3.116 3.115l.086 .233c.311 .907 .396 1.865 .263 2.794l-.062 .36l-.012 .052a6 6 0 0 1 -1.121 2.41l-.16 .199a6 6 0 0 1 -10.396 -2.378l-.068 -.288l-.009 -.046a6 6 0 0 1 2.833 -6.324l.055 -.031v-6.803a1 1 0 1 1 0 -2zm-2 2h-2v7.416a1 1 0 0 1 -.483 .856l-.117 .06a4 4 0 0 0 -2.4 3.668h8a4 4 0 0 0 -.486 -1.914a1 1 0 0 1 .17 -1.185l2.902 -2.901l-.586 -.586l-2.9 2.902a1 1 0 0 1 -1.067 .226l-.12 -.056a4 4 0 0 0 -.316 -.155a1 1 0 0 1 -.597 -.915z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodNeutralFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-neutral" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-7.99 5.66l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconStarFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-star" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconXboxAFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-xbox-a" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m.936 5.649c-.324 -.865 -1.548 -.865 -1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111 .035a1 1 0 0 0 1.176 -.62l.507 -1.351h3.114l.507 1.351a1 1 0 1 0 1.872 -.702zm-.936 3.199l.807 2.152h-1.614z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconKeyframeAlignCenterFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-keyframe-align-center" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" /> <path d="M12 6c-.629 0 -1.214 .301 -1.606 .807l-2.908 3.748a2.395 2.395 0 0 0 -.011 2.876l2.919 3.762c.39 .505 .977 .807 1.606 .807c.629 0 1.214 -.301 1.606 -.807l2.908 -3.748a2.395 2.395 0 0 0 .011 -2.876l-2.919 -3.762a2.032 2.032 0 0 0 -1.606 -.807z" /> <path d="M12 1a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" /> <path d="M5 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" /> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSunFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-sun" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /> <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" /> <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" /> <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" /> <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" /> <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /> <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGaugeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-gauge" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-.293 3.953a1 1 0 0 0 -1.414 0l-2.59 2.59l-.083 .094l-.068 .1a2.001 2.001 0 0 0 -2.547 1.774l-.005 .149l.005 .15a2 2 0 1 0 3.917 -.701a.968 .968 0 0 0 .195 -.152l2.59 -2.59l.083 -.094a1 1 0 0 0 -.083 -1.32zm-4.707 -1.293a6 6 0 0 0 -6 6a1 1 0 0 0 2 0a4 4 0 0 1 4 -4a1 1 0 0 0 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMessageReportFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-message-report" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-6 10a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -6a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutBottombarExpandFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-bottombar-expand" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-12a1 1 0 0 0 -.993 .883l-.007 .117v9h14v-9a1 1 0 0 0 -.883 -.993l-.117 -.007zm-5.387 3.21l.094 .083l2 2a1 1 0 0 1 -1.32 1.497l-.094 -.083l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.32 -.083z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconInfoSquareRoundedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-info-square-rounded" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPizzaFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-pizza" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.89 2.542l8.5 16.517a1 1 0 0 1 -.446 1.354a20.1 20.1 0 0 1 -8.945 2.087l-.522 -.007a20.1 20.1 0 0 1 -8.423 -2.08a1 1 0 0 1 -.443 -1.354l8.5 -16.517a1 1 0 0 1 1.778 0m-7.064 14.64l-.96 1.865l.409 .17a18.2 18.2 0 0 0 6.226 1.276l.5 .007a18.1 18.1 0 0 0 6.708 -1.279l.424 -.176l-.89 -1.728a15.9 15.9 0 0 1 -6.046 1.183a15.9 15.9 0 0 1 -6.37 -1.318m5.174 -4.192a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m2 -2.99a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBoneFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bone" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 2a4 4 0 0 1 3.881 3.03l.016 .072l.08 .019a4 4 0 0 1 2.83 2.65l.057 .193a4 4 0 0 1 -5.847 4.51l-.047 -.029l-3.525 3.525l.042 .07a4 4 0 0 1 .117 3.696l-.102 .197a4 4 0 0 1 -4.386 1.969a3.99 3.99 0 0 1 -2.982 -2.904l-.023 -.095l-.138 -.033a4 4 0 0 1 -2.82 -2.783l-.05 -.199a4 4 0 0 1 5.865 -4.368l.068 .04l3.524 -3.524l-.036 -.061a4 4 0 0 1 -.293 -3.295l.079 -.205a4 4 0 0 1 3.695 -2.47l-.139 .004l.02 -.003z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlertCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alert-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareRotatedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-rotated" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9.793 2.893l-6.9 6.9c-1.172 1.171 -1.172 3.243 0 4.414l6.9 6.9c1.171 1.172 3.243 1.172 4.414 0l6.9 -6.9c1.172 -1.171 1.172 -3.243 0 -4.414l-6.9 -6.9c-1.171 -1.172 -3.243 -1.172 -4.414 0z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChartPieFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chart-pie" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9.883 2.207a1.9 1.9 0 0 1 2.087 1.522l.025 .167l.005 .104v7a1 1 0 0 0 .883 .993l.117 .007h6.8a2 2 0 0 1 2 2a1 1 0 0 1 -.026 .226a10 10 0 1 1 -12.27 -11.933l.27 -.067l.11 -.02z" /> <path d="M14 3.5v5.5a1 1 0 0 0 1 1h5.5a1 1 0 0 0 .943 -1.332a10 10 0 0 0 -6.11 -6.111a1 1 0 0 0 -1.333 .943z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCaptureFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-capture" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 3a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 0 -.993 .883l-.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2z" /> <path d="M4 15a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 0 .883 .993l.117 .007h2a1 1 0 0 1 .117 1.993l-.117 .007h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-2a1 1 0 0 1 1 -1z" /> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 0 -.883 -.993l-.117 -.007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" /> <path d="M20 15a1 1 0 0 1 .993 .883l.007 .117v2a3 3 0 0 1 -2.824 2.995l-.176 .005h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2a1 1 0 0 0 .993 -.883l.007 -.117v-2a1 1 0 0 1 1 -1z" /> <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeSdFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-sd" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-4 4h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3m-5.75 0h-1.25a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h1v1h-1.033l-.025 -.087a1 1 0 0 0 -1.942 .337c0 .966 .784 1.75 1.75 1.75h1.25a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2h-1v-1h1.032l.026 .087a1 1 0 0 0 1.942 -.337a1.75 1.75 0 0 0 -1.75 -1.75m5.75 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBugFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bug" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 4a4 4 0 0 1 3.995 3.8l.005 .2a1 1 0 0 1 .428 .096l3.033 -1.938a1 1 0 1 1 1.078 1.684l-3.015 1.931a7.17 7.17 0 0 1 .476 2.227h3a1 1 0 0 1 0 2h-3v1a6.01 6.01 0 0 1 -.195 1.525l2.708 1.616a1 1 0 1 1 -1.026 1.718l-2.514 -1.501a6.002 6.002 0 0 1 -3.973 2.56v-5.918a1 1 0 0 0 -2 0v5.917a6.002 6.002 0 0 1 -3.973 -2.56l-2.514 1.503a1 1 0 1 1 -1.026 -1.718l2.708 -1.616a6.01 6.01 0 0 1 -.195 -1.526v-1h-3a1 1 0 0 1 0 -2h3.001v-.055a7 7 0 0 1 .474 -2.173l-3.014 -1.93a1 1 0 1 1 1.078 -1.684l3.032 1.939l.024 -.012l.068 -.027l.019 -.005l.016 -.006l.032 -.008l.04 -.013l.034 -.007l.034 -.004l.045 -.008l.015 -.001l.015 -.002l.087 -.004a4 4 0 0 1 4 -4zm0 2a2 2 0 0 0 -2 2h4a2 2 0 0 0 -2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutKanbanFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-kanban" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10 3a1 1 0 0 1 0 2h-6a1 1 0 1 1 0 -2z" /> <path d="M20 3a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z" /> <path d="M8 7a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" /> <path d="M18 7a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomMoneyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-money" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-2 2.928h-2.5a2.5 2.5 0 0 0 0 5h1a.5 .5 0 1 1 0 1h-2.5a1 1 0 0 0 0 2h2.5a2.5 2.5 0 1 0 0 -5h-1a.5 .5 0 0 1 0 -1h2.5a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPolaroidFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-polaroid" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9.199 9.623l.108 .098l3.986 3.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-.292 -.293l1.292 -1.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.502 4.503a4.003 4.003 0 0 1 -3.596 2.77l-.213 .006h-12a4.002 4.002 0 0 1 -3.809 -2.775l5.516 -5.518l.106 -.095c.457 -.38 .918 -.38 1.386 .011zm8.801 -7.623a4 4 0 0 1 3.995 3.8l.005 .2v6.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-1.307 1.306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-4.307 4.306v-6.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> <path d="M8.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z" /> <path d="M12.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z" /> <path d="M16.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutNavbarFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-navbar" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm1 6h-14v9a1 1 0 0 0 .883 .993l.117 .007h12a1 1 0 0 0 .993 -.883l.007 -.117v-9z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAssemblyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-assembly" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13.666 1.429l6.75 3.98q .1 .06 .18 .133l.009 .008l.106 .075a3.22 3.22 0 0 1 1.284 2.39l.005 .203v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.23 3.23 0 0 1 -1.678 -2.826v-7.285a3.21 3.21 0 0 1 1.65 -2.808l6.775 -3.995a3.34 3.34 0 0 1 3.24 .015m-.64 5.343a2.03 2.03 0 0 0 -2 -.014l-3.023 1.804a1.99 1.99 0 0 0 -1.002 1.736v3.278a2 2 0 0 0 1.03 1.75l2.946 1.89c.657 .367 1.39 .367 1.994 .033l3.054 -1.955c.582 -.322 .976 -.992 .976 -1.719v-3.277l-.005 -.164a2 2 0 0 0 -.725 -1.391l-.092 -.07l-.056 -.047a1 1 0 0 0 -.096 -.064z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandPaypalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-paypal" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.5 2c3.113 0 5.309 1.785 5.863 4.565c1.725 1.185 2.637 3.152 2.637 5.435c0 2.933 -2.748 5.384 -5.783 5.496l-.217 .004h-1.754l-.466 2.8a1.998 1.998 0 0 1 -1.823 1.597l-.157 .003h-2.68a1.5 1.5 0 0 1 -1.182 -.54a1.495 1.495 0 0 1 -.348 -1.07l.042 -.29h-1.632c-1.004 0 -1.914 -.864 -1.994 -1.857l-.006 -.143l.01 -.141l1.993 -13.954l.003 -.048c.072 -.894 .815 -1.682 1.695 -1.832l.156 -.02l.143 -.005h5.5zm5.812 7.35l-.024 .087c-.706 2.403 -3.072 4.436 -5.555 4.557l-.233 .006h-2.503v.05l-.025 .183l-1.2 5a1.007 1.007 0 0 1 -.019 .07l-.088 .597h2.154l.595 -3.564a1 1 0 0 1 .865 -.829l.121 -.007h2.6c2.073 0 4 -1.67 4 -3.5c0 -1.022 -.236 -1.924 -.688 -2.65z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCompassFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-compass" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 14.66a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm3.684 -10.949l-6 2a1 1 0 0 0 -.633 .633l-2.007 6.026l-.023 .086l-.017 .113l-.004 .068v.044l.009 .111l.012 .07l.04 .144l.045 .1l.054 .095l.064 .09l.069 .075l.084 .074l.098 .07l.1 .054l.078 .033l.105 .033l.109 .02l.043 .005l.068 .004h.044l.111 -.009l.07 -.012l.02 -.006l.019 -.002l.074 -.022l6 -2a1 1 0 0 0 .633 -.633l2 -6a1 1 0 0 0 -1.265 -1.265zm-1.265 2.529l-1.21 3.629l-3.629 1.21l1.21 -3.629l3.629 -1.21zm-9.419 1.42a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm-7 -7a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMeteorFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-meteor" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M21.874 3.486l-4.174 7.514h3.3c.846 0 1.293 .973 .791 1.612l-.074 .085l-6.9 7.095a7.5 7.5 0 1 1 -10.21 -10.974l7.746 -6.58c.722 -.614 1.814 .028 1.628 .958l-.577 2.879l7.11 -3.95c.88 -.488 1.849 .481 1.36 1.36m-12.374 7.515a3.5 3.5 0 0 0 -3.495 3.308l-.005 .192a3.5 3.5 0 1 0 3.5 -3.5" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSunglassesFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-sunglasses" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 3a1 1 0 1 1 0 2h-1.257l-2.4 8h5.657a1 1 0 0 1 1 1v1h2v-1a1 1 0 0 1 1 -1h5.656l-2.4 -8h-1.256a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h2a1 1 0 0 1 .958 .713l3.01 10.036l.022 .112l.008 .08l.002 2.559a4.5 4.5 0 0 1 -8.972 .5h-2.056a4.5 4.5 0 0 1 -8.972 -.5v-2.518l.004 -.071l.014 -.103l.018 -.076l3.006 -10.02a1 1 0 0 1 .958 -.712z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconJetpackFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-jetpack" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 2a4 4 0 0 1 4 4v7a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-1h-2v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-7a4 4 0 0 1 8 0v1h2v-1a4 4 0 0 1 4 -4m-4 8v-1h-2v1zm-4 5a1 1 0 0 1 1 1c0 2.623 -.787 4.59 -2.4 5.8a1 1 0 0 1 -1.2 0c-1.613 -1.21 -2.4 -3.177 -2.4 -5.8a1 1 0 0 1 2 0c0 1.532 .308 2.684 .906 3.498l.094 .119l.094 -.12c.558 -.759 .864 -1.813 .902 -3.196l.004 -.301a1 1 0 0 1 1 -1m10 0a1 1 0 0 1 1 1c0 2.623 -.787 4.59 -2.4 5.8a1 1 0 0 1 -1.2 0c-1.613 -1.21 -2.4 -3.177 -2.4 -5.8a1 1 0 0 1 2 0c0 1.532 .308 2.684 .906 3.498l.094 .119l.094 -.12c.558 -.759 .864 -1.813 .902 -3.196l.004 -.301a1 1 0 0 1 1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconWomanFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-woman" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 8c1.91 0 3.79 .752 5.625 2.219a1 1 0 1 1 -1.25 1.562c-1.019 -.815 -2.016 -1.345 -2.997 -1.6l1.584 5.544a1 1 0 0 1 -.962 1.275h-1v4a1 1 0 0 1 -2 0v-4h-2v4a1 1 0 0 1 -2 0v-4h-1a1 1 0 0 1 -.962 -1.275l1.584 -5.545c-.98 .256 -1.978 .786 -2.997 1.601a1 1 0 1 1 -1.25 -1.562c1.733 -1.386 3.506 -2.133 5.307 -2.212l.335 -.007z" /> <path d="M12 1a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCapsuleHorizontalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-capsule-horizontal" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 5h-6a7 7 0 1 0 0 14h6a7 7 0 0 0 7 -7l-.007 -.303a7 7 0 0 0 -6.993 -6.697z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCreditCardFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-credit-card" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M22 10v6a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-6h20zm-14.99 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2zm5.99 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2zm5 -10a4 4 0 0 1 4 4h-20a4 4 0 0 1 4 -4h12z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCopyleftFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-copyleft" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2.117 5.889a4.016 4.016 0 0 0 -5.543 -.23a1 1 0 0 0 1.32 1.502a2.016 2.016 0 0 1 2.783 .116a1.993 1.993 0 0 1 0 2.766a2.016 2.016 0 0 1 -2.783 .116a1 1 0 0 0 -1.32 1.501a4.016 4.016 0 0 0 5.543 -.23a3.993 3.993 0 0 0 0 -5.542z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconManualGearboxFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-manual-gearbox" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 3a3 3 0 0 1 1 5.829v1.171a3 3 0 0 1 -3 3h-4v2.171a3.001 3.001 0 1 1 -4 2.829l.005 -.176a3 3 0 0 1 1.995 -2.654v-2.17h-5v2.171a3.001 3.001 0 1 1 -4 2.829l.005 -.176a3 3 0 0 1 1.995 -2.654v-6.341a3 3 0 0 1 -2 -2.829l.005 -.176a3 3 0 1 1 3.996 3.005l-.001 2.171h5v-2.17a3 3 0 0 1 -2 -2.83l.005 -.176a3 3 0 1 1 3.996 3.005l-.001 2.171h4a1 1 0 0 0 1 -1v-1.17a3 3 0 0 1 -2 -2.83l.005 -.176a3 3 0 0 1 2.995 -2.824" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPlayerTrackPrevFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-player-track-prev" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" /> <path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconXboxBFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-xbox-b" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m1 5h-3a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h3a3 3 0 0 0 2.235 -5a3 3 0 0 0 -2.235 -5m0 6a1 1 0 0 1 1 1l-.007 .117a1 1 0 0 1 -.993 .883h-2v-2zm0 -4a1 1 0 0 1 0 2h-2v-2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDiamondFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-diamond" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 4a1 1 0 0 1 .783 .378l.074 .108l3 5a1 1 0 0 1 -.032 1.078l-.08 .103l-8.53 9.533a1.7 1.7 0 0 1 -1.215 .51c-.4 0 -.785 -.14 -1.11 -.417l-.135 -.126l-8.5 -9.5a1 1 0 0 1 -.172 -1.067l.06 -.115l3.013 -5.022l.064 -.09a.982 .982 0 0 1 .155 -.154l.089 -.064l.088 -.05l.05 -.023l.06 -.025l.109 -.032l.112 -.02l.117 -.005h12zm-8.886 3.943a1 1 0 0 0 -1.371 .343l-.6 1l-.06 .116a1 1 0 0 0 .177 1.07l2 2.2l.09 .088a1 1 0 0 0 1.323 -.02l.087 -.09a1 1 0 0 0 -.02 -1.323l-1.501 -1.65l.218 -.363l.055 -.103a1 1 0 0 0 -.398 -1.268z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlignBoxTopCenterFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-align-box-top-center" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-6.333 3a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 1.993 -.117v-6l-.007 -.117a1 1 0 0 0 -.993 -.883zm3 0a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883zm-6 0a1 1 0 0 0 -1 1v2l.007 .117a1 1 0 0 0 1.993 -.117v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutDistributeVerticalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-distribute-vertical" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 3a1 1 0 0 1 1 1v16a1 1 0 0 1 -2 0v-16a1 1 0 0 1 1 -1" /> <path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1 -2 0v-16a1 1 0 0 1 1 -1" /> <path d="M13 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconClockFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-clock" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconOctagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-octagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15.3 2h-6.6c-.562 0 -1.016 .201 -1.407 .593l-4.7 4.7a1.894 1.894 0 0 0 -.593 1.407v6.6c0 .562 .201 1.016 .593 1.407l4.7 4.7c.391 .392 .845 .593 1.407 .593h6.6c.562 0 1.016 -.201 1.407 -.593l4.7 -4.7c.392 -.391 .593 -.845 .593 -1.407v-6.6c0 -.562 -.201 -1.016 -.593 -1.407l-4.7 -4.7a1.894 1.894 0 0 0 -1.407 -.593z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutBottombarCollapseFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-bottombar-collapse" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-12a1 1 0 0 0 -.993 .883l-.007 .117v9h14v-9a1 1 0 0 0 -.883 -.993l-.117 -.007zm-7.387 3.21l.094 .083l1.293 1.292l1.293 -1.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPhoneFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-phone" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCircleXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circle-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLungsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-lungs" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 3a1 1 0 0 1 1 1v5a2 2 0 0 0 1 1.732v-3.475c0 -1.242 .995 -2.257 2.233 -2.257c.372 0 .738 .094 1.122 .307l.18 .117c1.695 1.23 2.76 3.035 3.773 6.34q .674 2.204 .692 5.06c.016 2.195 -1.657 4.024 -3.843 4.168l-.237 .008c-2.17 0 -3.92 -1.787 -3.92 -3.98v-4.146a4 4 0 0 1 -1.893 -1.112l-.107 -.118l-.107 .118a4 4 0 0 1 -1.892 1.112l-.001 4.146c0 2.193 -1.75 3.98 -3.919 3.98l-.268 -.01c-2.155 -.142 -3.827 -1.971 -3.811 -4.165q .018 -2.858 .692 -5.06c1.011 -3.307 2.076 -5.112 3.822 -6.375l.188 -.117a2.2 2.2 0 0 1 1.064 -.273c1.237 0 2.232 1.015 2.232 2.257l.001 3.475a2 2 0 0 0 .999 -1.732v-5a1 1 0 0 1 1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSaladFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-salad" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9.53 3.152l3.742 2.339q 1.492 -.491 3.472 -.491h2.256a1 1 0 0 1 1 1l-.001 1.336l-.05 .895l-.042 .585c-.037 .457 -.08 .84 -.134 1.185l.227 -.001a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2h.078a14 14 0 0 1 -.078 -1v-1a1 1 0 0 1 1 -1h1.755c.138 0 .287 .034 .44 .092l.835 -3.335a1 1 0 0 1 1.5 -.605m-2.193 5.847l-1.335 .001l.027 .42q .025 .292 .064 .58h.942q .078 -.533 .302 -1.001m10.663 -1.999h-1.256c-1.712 0 -3.003 .31 -3.922 .88a3.5 3.5 0 0 1 1.143 2.12h3.774c.127 -.615 .194 -1.4 .261 -2.714zm-7.5 2a1.5 1.5 0 0 0 -1.414 1h2.828a1.5 1.5 0 0 0 -.845 -.888l-.166 -.056a1.5 1.5 0 0 0 -.403 -.056m-.864 -3.424l-.415 1.665a3.5 3.5 0 0 1 1.502 -.234a6 6 0 0 1 .497 -.442z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPictureInPictureTopFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-picture-in-picture-top" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11 4a1 1 0 0 1 0 2h-6a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-4a1 1 0 0 1 2 0v4a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3z" /> <path d="M20 4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconEyeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-eye" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRadioactiveFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-radioactive" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M21 11a1 1 0 0 1 1 1a10 10 0 0 1 -5 8.656a1 1 0 0 1 -1.302 -.268l-.064 -.098l-3 -5.19a.995 .995 0 0 1 -.133 -.542l.01 -.11l.023 -.106l.034 -.106l.046 -.1l.056 -.094l.067 -.089a.994 .994 0 0 1 .165 -.155l.098 -.064a2 2 0 0 0 .993 -1.57l.007 -.163a1 1 0 0 1 .883 -.994l.117 -.007h6z" /> <path d="M7 3.344a10 10 0 0 1 10 0a1 1 0 0 1 .418 1.262l-.052 .104l-3 5.19l-.064 .098a.994 .994 0 0 1 -.155 .165l-.089 .067a1 1 0 0 1 -.195 .102l-.105 .034l-.107 .022a1.003 1.003 0 0 1 -.547 -.07l-.104 -.052a2 2 0 0 0 -1.842 -.082l-.158 .082a1 1 0 0 1 -1.302 -.268l-.064 -.098l-3 -5.19a1 1 0 0 1 .366 -1.366z" /> <path d="M9 11a1 1 0 0 1 .993 .884l.007 .117a2 2 0 0 0 .861 1.645l.237 .152a.994 .994 0 0 1 .165 .155l.067 .089l.056 .095l.045 .099c.014 .036 .026 .07 .035 .106l.022 .107l.011 .11a.994 .994 0 0 1 -.08 .437l-.053 .104l-3 5.19a1 1 0 0 1 -1.366 .366a10 10 0 0 1 -5 -8.656a1 1 0 0 1 .883 -.993l.117 -.007h6z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeVoFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-vo" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-3.5 4a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0v-3a2.5 2.5 0 0 0 -2.5 -2.5m-4.184 .051a1 1 0 0 0 -1.265 .633l-1.051 3.154l-1.051 -3.154a1 1 0 0 0 -1.898 .632l2 6c.304 .912 1.594 .912 1.898 0l2 -6a1 1 0 0 0 -.633 -1.265m4.184 1.949a.5 .5 0 0 1 .5 .5v3a.5 .5 0 1 1 -1 0v-3a.5 .5 0 0 1 .5 -.5" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLocationFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-location" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFlowerFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-flower" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1a4 4 0 0 1 4 4l-.002 .055l.03 -.018a3.97 3.97 0 0 1 2.79 -.455l.237 .056a3.97 3.97 0 0 1 2.412 1.865a4.01 4.01 0 0 1 -1.455 5.461l-.068 .036l.071 .039a4.01 4.01 0 0 1 1.555 5.27l-.101 .186a3.97 3.97 0 0 1 -5.441 1.468l-.03 -.02l.002 .057a4 4 0 0 1 -3.8 3.995l-.2 .005a4 4 0 0 1 -4 -4l.001 -.056l-.029 .019a3.97 3.97 0 0 1 -2.79 .456l-.236 -.056a3.97 3.97 0 0 1 -2.413 -1.865a4.01 4.01 0 0 1 1.453 -5.46l.07 -.038l-.071 -.038a4.01 4.01 0 0 1 -1.555 -5.27l.1 -.187a3.97 3.97 0 0 1 5.444 -1.468l.026 .018v-.055a4 4 0 0 1 3.8 -3.995zm0 8a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPlayerRecordFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-player-record" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCopyCheckFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-copy-check" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.333 6a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-3.333 -4c1.094 0 1.828 .533 2.374 1.514a1 1 0 1 1 -1.748 .972c-.221 -.398 -.342 -.486 -.626 -.486h-10c-.548 0 -1 .452 -1 1v9.998c0 .32 .154 .618 .407 .805l.1 .065a1 1 0 1 1 -.99 1.738a3 3 0 0 1 -1.517 -2.606v-10c0 -1.652 1.348 -3 3 -3zm1.293 9.293l-3.293 3.292l-1.293 -1.292a1 1 0 0 0 -1.414 1.414l2 2a1 1 0 0 0 1.414 0l4 -4a1 1 0 0 0 -1.414 -1.414" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRectangleVerticalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-rectangle-vertical" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 2h-10a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPillFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-pill" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20.207 3.793a5.95 5.95 0 0 1 0 8.414l-8 8a5.95 5.95 0 0 1 -8.414 -8.414l8 -8a5.95 5.95 0 0 1 8.414 0m-7 1.414l-4.294 4.293l5.586 5.586l4.294 -4.292a3.95 3.95 0 1 0 -5.586 -5.586" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGiftFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-gift" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRelationOneToManyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-relation-one-to-many" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-4.2 5.4c-.577 -.769 -1.8 -.361 -1.8 .6v4a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1l1.2 1.6c.577 .769 1.8 .361 1.8 -.6v-4a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v1zm-6.8 -.4h-1a1 1 0 1 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m3 3.5a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinBitcoinFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin-bitcoin" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4 2.66a1 1 0 0 0 -1 1h-1a1 1 0 0 0 -2 0a1 1 0 1 0 0 2v6a1 1 0 0 0 0 2c0 1.333 2 1.333 2 0h1a1 1 0 0 0 2 0v-.15c1.167 -.394 2 -1.527 2 -2.85l-.005 -.175a3.063 3.063 0 0 0 -.734 -1.827c.46 -.532 .739 -1.233 .739 -1.998c0 -1.323 -.833 -2.456 -2 -2.85v-.15a1 1 0 0 0 -1 -1zm.09 7c.492 0 .91 .437 .91 1s-.418 1 -.91 1h-2.09v-2h2.09zm0 -4c.492 0 .91 .437 .91 1c0 .522 -.36 .937 -.806 .993l-.104 .007h-2.09v-2h2.09z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodWrrrFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-wrrr" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10a10 10 0 1 1 0 -20m3.707 12.293a1 1 0 0 0 -1.262 -.125l-.945 .63l-.945 -.63l-.116 -.066a1 1 0 0 0 -.994 .066l-.945 .63l-.945 -.63a1 1 0 0 0 -1.262 .125l-1 1a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l.42 -.42l.818 .545l.116 .066a1 1 0 0 0 .994 -.066l.945 -.63l.945 .63l.116 .066a1 1 0 0 0 .994 -.066l.817 -.545l.42 .42a1 1 0 0 0 1.415 -1.414zm-6.5 -6.5a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l1.5 -1.5a1 1 0 0 0 0 -1.414zm7 0a1 1 0 0 0 -1.414 0l-1.5 1.5a1 1 0 0 0 0 1.414l1.5 1.5a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-.792 -.793l.792 -.793a1 1 0 0 0 0 -1.414" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTagsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-tags" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9.172 5a3 3 0 0 1 2.121 .879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3.41 3.41 0 0 1 -4.822 0l-5.71 -5.71a3 3 0 0 1 -.879 -2.121v-4.172a3 3 0 0 1 3 -3zm-2.172 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2" /> <path d="M14.293 5.293a1 1 0 0 1 1.414 0l4.593 4.592a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1 -1.414 -1.414l1.592 -1.592a3.82 3.82 0 0 0 0 -5.402l-4.592 -4.592a1 1 0 0 1 0 -1.414" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCropPortraitFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-crop-portrait" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinYuanFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin-yuan" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.445 3.828a1 1 0 0 0 -1.387 .277l-2.168 3.251l-2.168 -3.25a1 1 0 0 0 -1.286 -.337l-.1 .059a1 1 0 0 0 -.278 1.387l2.296 3.445h-1.464a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v3a1 1 0 0 0 .883 .993l.117 .007l.117 -.007a1 1 0 0 0 .883 -.993v-3h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-1.465l2.297 -3.445a1 1 0 0 0 -.184 -1.317l-.093 -.07z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMelonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-melon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.77 2.62a1 1 0 0 1 1.436 .055a10.96 10.96 0 0 1 2.794 7.326c0 6.074 -4.925 10.999 -10.999 10.999a10.97 10.97 0 0 1 -7.684 -3.127a1 1 0 0 1 .008 -1.438l4.343 -4.153a1 1 0 0 1 1.352 -.027a3 3 0 0 0 4.32 -4.133a1 1 0 0 1 .088 -1.35z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodSmileFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-smile" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.8 10.946a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414zm-6.19 -5.286l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm6 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconStackFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-stack" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20.894 13.553a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.553 3.774l7.554 -3.775a1 1 0 0 1 1.341 .447m-8.887 -8.552q .056 0 .111 .007l.111 .02l.086 .024l.012 .006l.012 .002l.029 .014l.05 .019l.016 .009l.012 .005l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 0 -1.788l8 -4l.011 -.005l.018 -.01l.078 -.032l.011 -.002l.013 -.006l.086 -.024l.11 -.02l.056 -.005z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMapPinFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFilterFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-filter" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 3h-16a1 1 0 0 0 -1 1v2.227l.008 .223a3 3 0 0 0 .772 1.795l4.22 4.641v8.114a1 1 0 0 0 1.316 .949l6 -2l.108 -.043a1 1 0 0 0 .576 -.906v-6.586l4.121 -4.12a3 3 0 0 0 .879 -2.123v-2.171a1 1 0 0 0 -1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeAdFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-ad" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-4 4h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3m-6.5 0a2.5 2.5 0 0 0 -2.5 2.5v4.5a1 1 0 0 0 2 0v-1h1v1a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-4.5a2.5 2.5 0 0 0 -2.5 -2.5m6.5 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007zm-6.5 0a.5 .5 0 0 1 .5 .5v1.5h-1v-1.5a.5 .5 0 0 1 .41 -.492z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandTiktokFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRelationManyToManyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-relation-many-to-many" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-3.2 5.4c-.577 -.769 -1.8 -.361 -1.8 .6v4a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1l1.2 1.6c.577 .769 1.8 .361 1.8 -.6v-4a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v1zm-9 0c-.577 -.769 -1.8 -.361 -1.8 .6v4a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1l1.2 1.6c.577 .769 1.8 .361 1.8 -.6v-4a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v1zm5.2 3.1a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutBottombarFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-bottombar" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-12a1 1 0 0 0 -.993 .883l-.007 .117v9h14v-9a1 1 0 0 0 -.883 -.993l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCalendarFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-calendar" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z" /> <path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZeppelinFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zeppelin" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13.5 3c5.187 0 9.5 3.044 9.5 7c0 3.017 -2.508 5.503 -6 6.514v3.486a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-4.046a21 21 0 0 1 -2.66 -1.411l-.13 -.082l-1.57 1.308a1 1 0 0 1 -1.634 -.656l-.006 -.113v-2.851l-.31 -.25a47 47 0 0 1 -.682 -.568l-.67 -.582a1 1 0 0 1 0 -1.498a47 47 0 0 1 1.351 -1.151l.311 -.25v-2.85a1 1 0 0 1 1.55 -.836l.09 .068l1.57 1.307l.128 -.08c2.504 -1.553 4.784 -2.378 6.853 -2.453zm-2.499 13.657l-.001 2.343h4l.001 -2.086q -.735 .086 -1.501 .086a9.6 9.6 0 0 1 -2.13 -.252z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGlobeFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-globe" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11 4a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> <path d="M14.133 1.502a1 1 0 0 1 1.365 -.369a9.015 9.015 0 1 1 -10.404 14.622a1 1 0 1 1 1.312 -1.51a7.015 7.015 0 1 0 8.096 -11.378a1 1 0 0 1 -.369 -1.365z" /> <path d="M11 16a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4a1 1 0 0 1 1 -1z" /> <path d="M15 20a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCrossFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cross" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10 2l-.117 .007a1 1 0 0 0 -.883 .993v4h-4a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 .993 .883h4v8a1 1 0 0 0 1 1h4l.117 -.007a1 1 0 0 0 .883 -.993v-8h4a1 1 0 0 0 1 -1v-4l-.007 -.117a1 1 0 0 0 -.993 -.883h-4v-4a1 1 0 0 0 -1 -1h-4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconSquareMinusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-square-minus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconInfoTriangleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-info-triangle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm0 9.33h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBadgeArFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-badge-ar" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10.5 4a2.5 2.5 0 0 0 -2.5 2.5v4.5a1 1 0 0 0 2 0v-1h1v1a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-4.5a2.5 2.5 0 0 0 -2.5 -2.5m7 0h-1.5a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1.196l1.168 1.75a1 1 0 0 0 1.387 .278l.093 -.07a1 1 0 0 0 .184 -1.317l-1.159 -1.738l.044 -.023a2.5 2.5 0 0 0 -1.217 -4.684m-7 2a.5 .5 0 0 1 .5 .5v1.5h-1v-1.5a.5 .5 0 0 1 .41 -.492zm7 0a.5 .5 0 1 1 0 1h-.5v-1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCookieManFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cookie-man" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.007 1l.238 .005a6 6 0 0 1 5.405 3.974l.078 .233a6 6 0 0 1 -.182 4.08l-.093 .21l.05 -.002a2.94 2.94 0 0 1 2.638 1.511l.081 .158a2.887 2.887 0 0 1 -1.234 3.764l-.19 .096l-1.798 .821v.963l1.166 1.166l.14 .154a2.96 2.96 0 0 1 -.17 4.002c-1.087 1.088 -2.827 1.161 -4.03 .144l-.16 -.146l-1.946 -1.948l-1.946 1.947a2.96 2.96 0 0 1 -3.95 .22l-.15 -.128c-1.17 -1.073 -1.284 -2.879 -.234 -4.12l.146 -.158l1.134 -1.134v-.962l-1.834 -.84l-.181 -.093a2.88 2.88 0 0 1 -1.205 -3.75a2.93 2.93 0 0 1 2.646 -1.661l.13 .003l-.03 -.064a6.1 6.1 0 0 1 -.503 -1.968l-.017 -.26v-.217a6 6 0 0 1 5.775 -5.996l.224 -.004zm.003 15h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m0 -3h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m0 -5h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-2 -3h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m4 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconInfoOctagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-info-octagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.897 1a4 4 0 0 1 2.664 1.016l.165 .156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006 .227v5.794a4 4 0 0 1 -1.016 2.664l-.156 .165l-4.1 4.1a4 4 0 0 1 -2.603 1.168l-.227 .006h-5.795a3.999 3.999 0 0 1 -2.664 -1.017l-.165 -.156l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604l-.006 -.227v-5.794a4 4 0 0 1 1.016 -2.664l.156 -.165l4.1 -4.1a4 4 0 0 1 2.605 -1.168l.227 -.006h5.793zm-2.897 10h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoodConfuzedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mood-confuzed" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.43 10.162a11 11 0 0 0 -6.6 1.65a1 1 0 0 0 1.06 1.696a9 9 0 0 1 5.4 -1.35a1 1 0 0 0 .14 -1.996zm-6.56 -4.502l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChartAreaFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chart-area" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 18a1 1 0 0 1 .117 1.993l-.117 .007h-16a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /> <path d="M15.22 5.375a1 1 0 0 1 1.393 -.165l.094 .083l4 4a1 1 0 0 1 .284 .576l.009 .131v5a1 1 0 0 1 -.883 .993l-.117 .007h-16.022l-.11 -.009l-.11 -.02l-.107 -.034l-.105 -.046l-.1 -.059l-.094 -.07l-.06 -.055l-.072 -.082l-.064 -.089l-.054 -.096l-.016 -.035l-.04 -.103l-.027 -.106l-.015 -.108l-.004 -.11l.009 -.11l.019 -.105c.01 -.04 .022 -.077 .035 -.112l.046 -.105l.059 -.1l4 -6a1 1 0 0 1 1.165 -.39l.114 .05l3.277 1.638l3.495 -4.369z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconScubaDivingTankFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-scuba-diving-tank" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 17v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-2z" /> <path d="M8 2a2 2 0 0 1 1.732 1h1.15a1.496 1.496 0 0 1 2.236 0h1.882a1 1 0 0 1 0 2l-1.883 .001a2 2 0 0 1 -.115 .116v.983a5 5 0 0 1 3.998 4.9v4h-10v-4a5 5 0 0 1 4 -4.9v-.983a2 2 0 0 1 -.117 -.116h-1.151a2 2 0 1 1 -1.732 -3.001" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMountainFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mountain" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6.18 10.95l2.54 3.175l.084 .093a1 1 0 0 0 1.403 -.01l1.637 -1.638l1.324 1.985a1 1 0 0 0 1.457 .226l3.632 -2.906l3.647 7.697a1 1 0 0 1 -.904 1.428h-18a1 1 0 0 1 -.904 -1.428zm5.82 -7.878a3.3 3.3 0 0 1 2.983 1.888l2.394 5.057l-3.15 2.52l-1.395 -2.092l-.075 -.099a1 1 0 0 0 -1.464 -.053l-1.711 1.709l-1.301 -1.627l-1.151 -1.435l1.888 -3.98a3.3 3.3 0 0 1 2.982 -1.888" /> </svg>
		 ),
	},
	{
	 	 key: 'IconArtboardFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-artboard" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 7h-6a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-6a2 2 0 0 0 -2 -2z" /> <path d="M4 7a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M4 15a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M8 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /> <path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /> <path d="M21 7a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M21 15a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M8 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /> <path d="M16 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChessQueenFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chess-queen" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2a2 2 0 0 1 1.572 3.236l.793 1.983l1.702 -1.702a2.003 2.003 0 0 1 1.933 -2.517a2 2 0 0 1 .674 3.884l-1.69 9.295a1 1 0 0 1 -.865 .814l-.119 .007h-8a1 1 0 0 1 -.956 -.705l-.028 -.116l-1.69 -9.295a2 2 0 1 1 2.607 -1.367l1.701 1.702l.794 -1.983a2 2 0 0 1 1.572 -3.236z" /> <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCloudFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cloud" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlienFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alien" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.004 2c4.942 0 8.288 2.503 8.85 6.444a12.884 12.884 0 0 1 -2.163 9.308a11.794 11.794 0 0 1 -3.51 3.356c-1.982 1.19 -4.376 1.19 -6.373 -.008a11.763 11.763 0 0 1 -3.489 -3.34a12.808 12.808 0 0 1 -2.171 -9.306c.564 -3.95 3.91 -6.454 8.856 -6.454zm1.913 14.6a1 1 0 0 0 -1.317 -.517l-.146 .055a1.5 1.5 0 0 1 -1.054 -.055l-.11 -.04a1 1 0 0 0 -.69 1.874a3.5 3.5 0 0 0 2.8 0a1 1 0 0 0 .517 -1.317zm-5.304 -6.39a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -1.497l-2 -2zm8.094 .083a1 1 0 0 0 -1.414 0l-2 2l-.083 .094a1 1 0 0 0 1.497 1.32l2 -2l.083 -.094a1 1 0 0 0 -.083 -1.32z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDiceFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-dice" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.833 12a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3zm-7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3zm0 -7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3zm7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDiamondsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-diamonds" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2.005c-.777 0 -1.508 .367 -1.971 .99l-5.362 6.895c-.89 1.136 -.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93 -.017l5.361 -6.894c.89 -1.136 .89 -3.083 0 -4.227l-5.375 -6.911a2.446 2.446 0 0 0 -1.958 -.974z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBowlChopsticksFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bowl-chopsticks" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 10a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z" /> <path d="M18.929 6.003a1 1 0 1 1 .142 1.994l-14 1a1 1 0 1 1 -.142 -1.994z" /> <path d="M18.79 1.022a1 1 0 1 1 .42 1.956l-14 3a1 1 0 1 1 -.42 -1.956z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconDropletHalfFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-droplet-half" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2l.07 .003a2.41 2.41 0 0 1 1.825 .907l.108 .148l4.92 7.306c1.952 3.267 1.191 7.42 -1.796 9.836c-2.968 2.402 -7.285 2.402 -10.254 0c-2.917 -2.36 -3.711 -6.376 -1.901 -9.65l.134 -.232l4.893 -7.26c.185 -.275 .426 -.509 .709 -.686a2.426 2.426 0 0 1 1.066 -.36l.226 -.012zm-1 3.149l-4.206 6.24c-1.44 2.41 -.88 5.463 1.337 7.257a6.101 6.101 0 0 0 2.869 1.276v-14.773z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCoinEuroFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-coin-euro" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66c-2.052 0 -3.768 1.449 -4.549 3.5h-.451a1 1 0 0 0 -.117 1.993l.134 .007a7.298 7.298 0 0 0 0 1h-.017a1 1 0 0 0 0 2h.452c.78 2.053 2.496 3.5 4.548 3.5c1.141 0 2.217 -.457 3.084 -1.27a1 1 0 0 0 -1.368 -1.46c-.509 .478 -1.102 .73 -1.716 .73c-.922 0 -1.776 -.578 -2.335 -1.499l1.335 -.001a1 1 0 0 0 0 -2h-1.977a5.342 5.342 0 0 1 0 -1h1.977a1 1 0 0 0 0 -2h-1.336c.56 -.921 1.414 -1.5 2.336 -1.5c.615 0 1.208 .252 1.717 .73a1 1 0 0 0 1.368 -1.46c-.867 -.812 -1.943 -1.27 -3.085 -1.27z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutAlignBottomFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-align-bottom" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 19a1 1 0 0 1 0 2h-16a1 1 0 0 1 0 -2z" /> <path d="M13 3a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlarmPlusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alarm-plus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 3.928a1 1 0 0 0 -1 1v1h-1l-.117 .007a1 1 0 0 0 .117 1.993h1v1l.007 .117a1 1 0 0 0 1.993 -.117v-1h1l.117 -.007a1 1 0 0 0 -.117 -1.993h-1v-1l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> <path d="M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z" /> <path d="M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHelpHexagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-help-hexagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 13.586a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBalloonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-balloon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1a7 7 0 0 1 7 7c0 5.457 -3.028 10 -7 10c-3.9 0 -6.89 -4.379 -6.997 -9.703l-.003 -.297l.004 -.24a7 7 0 0 1 6.996 -6.76zm0 4a1 1 0 0 0 0 2l.117 .007a1 1 0 0 1 .883 .993l.007 .117a1 1 0 0 0 1.993 -.117a3 3 0 0 0 -3 -3z" /> <path d="M12 16a1 1 0 0 1 .993 .883l.007 .117v1a3 3 0 0 1 -2.824 2.995l-.176 .005h-3a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 1 -2 0a3 3 0 0 1 2.824 -2.995l.176 -.005h3a1 1 0 0 0 .993 -.883l.007 -.117v-1a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconReplaceFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-replace" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 2h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /> <path d="M20 14h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /> <path d="M16.707 2.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.293 1.293h3.586a3 3 0 0 1 2.995 2.824l.005 .176v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-3a1 1 0 0 0 -.883 -.993l-.117 -.007h-3.585l1.292 1.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-3 -3a.98 .98 0 0 1 -.28 -.872l.036 -.146l.04 -.104c.058 -.126 .14 -.24 .245 -.334l2.959 -2.958a1 1 0 0 1 1.414 0z" /> <path d="M3 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 0 .883 .993l.117 .007h3.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083l.094 .083l3 3a.98 .98 0 0 1 .28 .872l-.036 .146l-.04 .104a1.02 1.02 0 0 1 -.245 .334l-2.959 2.958a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.291 -1.293h-3.584a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a1 1 0 0 1 1 -1z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBookmarkFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-bookmark" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlertTriangleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCircleDotFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circle-dot" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 6.66a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconOvalVerticalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-oval-vertical" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 5c-5.457 0 -10 3.028 -10 7s4.543 7 10 7s10 -3.028 10 -7s-4.543 -7 -10 -7z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconTriangleInvertedFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-triangle-inverted" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconKeyframesFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-keyframes" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 4a2.599 2.599 0 0 0 -2 .957l-4.355 5.24a2.847 2.847 0 0 0 -.007 3.598l4.368 5.256c.499 .6 1.224 .949 1.994 .949a2.599 2.599 0 0 0 2 -.957l4.355 -5.24a2.847 2.847 0 0 0 .007 -3.598l-4.368 -5.256a2.593 2.593 0 0 0 -1.994 -.949z" /> <path d="M16.382 4.214a1 1 0 0 1 1.32 .074l.084 .094l4.576 5.823c.808 .993 .848 2.396 .13 3.419l-.12 .158l-4.586 5.836a1 1 0 0 1 -1.644 -1.132l.072 -.104l4.596 -5.85a.845 .845 0 0 0 .06 -.978l-.07 -.1l-4.586 -5.836a1 1 0 0 1 .168 -1.404z" /> <path d="M12.382 4.214a1 1 0 0 1 1.32 .074l.084 .094l4.576 5.823c.808 .993 .848 2.396 .13 3.419l-.12 .158l-4.586 5.836a1 1 0 0 1 -1.644 -1.132l.072 -.104l4.596 -5.85a.845 .845 0 0 0 .06 -.978l-.07 -.1l-4.586 -5.836a1 1 0 0 1 .168 -1.404z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutAlignTopFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-align-top" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" /> <path d="M13 7a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlertOctagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alert-octagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.897 1a4 4 0 0 1 2.664 1.016l.165 .156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006 .227v5.794a4 4 0 0 1 -1.016 2.664l-.156 .165l-4.1 4.1a4 4 0 0 1 -2.603 1.168l-.227 .006h-5.795a3.999 3.999 0 0 1 -2.664 -1.017l-.165 -.156l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604l-.006 -.227v-5.794a4 4 0 0 1 1.016 -2.664l.156 -.165l4.1 -4.1a4 4 0 0 1 2.605 -1.168l.227 -.006h5.793zm-2.887 14l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHexagonPlusFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-hexagon-plus" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13.666 1.429l6.75 3.98l.096 .063l.093 .078l.106 .074a3.22 3.22 0 0 1 1.284 2.39l.005 .204v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.23 3.23 0 0 1 -1.678 -2.826v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098c1 -.552 2.214 -.552 3.24 .015m-1.666 6.571a1 1 0 0 0 -1 1v2h-2a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v2a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-2h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-2a1 1 0 0 0 -.883 -.993z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBlobFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-blob" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 3c2.779 0 5.349 1.556 7.243 4.082c1.728 2.306 2.757 5.259 2.757 8.016c0 1.47 -.293 2.718 -.903 3.745c-.603 1.014 -1.479 1.758 -2.582 2.257c-1.593 .718 -3.335 .9 -6.515 .9c-3.175 0 -4.92 -.183 -6.514 -.9c-1.012 -.457 -1.833 -1.12 -2.426 -2.01l-.157 -.247c-.61 -1.028 -.903 -2.274 -.903 -3.745c0 -2.757 1.03 -5.71 2.757 -8.016c1.893 -2.526 4.463 -4.082 7.243 -4.082" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPanoramaHorizontalFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-panorama-horizontal" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19.31 4.591a2 2 0 0 1 2.69 1.873v11c0 1.382 -1.38 2.38 -2.694 1.897c-4.879 -1.845 -9.734 -1.845 -14.612 0c-1.304 .495 -2.694 -.481 -2.694 -1.871v-11.032a2 2 0 0 1 2.676 -1.87l.025 .012l.448 .162c4.572 1.623 9.123 1.622 13.703 -.003z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconYinYangFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-yin-yang" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-9 1.732a8 8 0 0 0 4 14.928l.2 -.005a4 4 0 0 0 0 -7.99l-.2 -.005a4 4 0 0 1 -.2 -7.995l.2 -.005a7.995 7.995 0 0 0 -4 1.072zm4 1.428a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z" /> <path d="M12 14.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrightnessFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brightness" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-9 1.732a8 8 0 0 0 4.001 14.928l-.001 -16a8 8 0 0 0 -4 1.072" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBackspaceFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-backspace" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M20 5a2 2 0 0 1 1.995 1.85l.005 .15v10a2 2 0 0 1 -1.85 1.995l-.15 .005h-11a1 1 0 0 1 -.608 -.206l-.1 -.087l-5.037 -5.04c-.809 -.904 -.847 -2.25 -.083 -3.23l.12 -.144l5 -5a1 1 0 0 1 .577 -.284l.131 -.009h11zm-7.489 4.14a1 1 0 0 0 -1.301 1.473l.083 .094l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.403 -1.403l-.094 .083l-1.293 1.292l-1.293 -1.292l-.094 -.083l-.102 -.07z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconShoppingCartFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCopyXFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-copy-x" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18.333 6a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-3.333 -4c1.094 0 1.828 .533 2.374 1.514a1 1 0 1 1 -1.748 .972c-.221 -.398 -.342 -.486 -.626 -.486h-10c-.548 0 -1 .452 -1 1v9.998c0 .32 .154 .618 .407 .805l.1 .065a1 1 0 1 1 -.99 1.738a3 3 0 0 1 -1.517 -2.606v-10c0 -1.652 1.348 -3 3 -3zm.8 8.786l-1.837 1.799l-1.749 -1.785a1 1 0 0 0 -1.319 -.096l-.095 .082a1 1 0 0 0 -.014 1.414l1.749 1.785l-1.835 1.8a1 1 0 0 0 -.096 1.32l.082 .095a1 1 0 0 0 1.414 .014l1.836 -1.8l1.75 1.786a1 1 0 0 0 1.319 .096l.095 -.082a1 1 0 0 0 .014 -1.414l-1.75 -1.786l1.836 -1.8a1 1 0 0 0 .096 -1.319l-.082 -.095a1 1 0 0 0 -1.414 -.014" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCircleKeyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circle-key" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0c0 -5.523 4.477 -10 10 -10zm2 5a3 3 0 0 0 -2.98 2.65l-.015 .174l-.005 .176l.005 .176c.019 .319 .087 .624 .197 .908l.09 .209l-3.5 3.5l-.082 .094a1 1 0 0 0 0 1.226l.083 .094l1.5 1.5l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-.792 -.793l.585 -.585l.793 .792l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-.792 -.793l.792 -.792a3 3 0 1 0 1.293 -5.708zm0 2a1 1 0 1 1 0 2a1 1 0 0 1 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCalculatorFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-calculator" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-10 15a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-8 -4a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-1 -7h-6a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAppleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-apple" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007c-.693 0 -1.33 .694 -1.691 1.552a5.1 5.1 0 0 1 1.982 -.544l.265 -.008c2.982 0 5.444 3.053 5.444 6.32c0 3.547 -.606 5.862 -2.423 8.578c-1.692 2.251 -4.092 2.753 -6.41 1.234a.31 .31 0 0 0 -.317 -.01c-2.335 1.528 -4.735 1.027 -6.46 -1.27c-1.783 -2.668 -2.39 -4.984 -2.39 -8.532l.004 -.222c.108 -3.181 2.526 -6.098 5.44 -6.098c.94 0 1.852 .291 2.688 .792c.419 -1.95 1.818 -3.792 3.868 -3.792m-7.034 6.154c-1.36 .858 -1.966 2.06 -1.966 3.846a1 1 0 0 0 2 0c0 -1.125 .28 -1.678 1.034 -2.154a1 1 0 1 0 -1.068 -1.692" /> </svg>
		 ),
	},
	{
	 	 key: 'IconRelationOneToOneFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-relation-one-to-one" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10 5h-1a1 1 0 1 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m7 0h-1a1 1 0 0 0 0 2v3a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m-4 3.5a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMouseFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-mouse" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-4a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-2 4a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPentagonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-pentagon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10.205 2.6l-6.96 5.238a3 3 0 0 0 -1.045 3.338l2.896 8.765a3 3 0 0 0 2.85 2.059h8.12a3 3 0 0 0 2.841 -2.037l2.973 -8.764a3 3 0 0 0 -1.05 -3.37l-7.033 -5.237l-.091 -.061l-.018 -.01l-.106 -.07a3 3 0 0 0 -3.377 .148z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCarambolaFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-carambola" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17.108 22.085c-1.266 -.068 -2.924 -.859 -5.071 -2.355l-.04 -.027l-.037 .027c-2.147 1.497 -3.804 2.288 -5.072 2.356l-.178 .005c-2.747 0 -3.097 -2.64 -1.718 -7.244l.054 -.178l-.1 -.075c-6.056 -4.638 -5.046 -7.848 2.554 -8.066l.202 -.005l.115 -.326c1.184 -3.33 2.426 -5.085 4.027 -5.192l.156 -.005c1.674 0 2.957 1.76 4.182 5.197l.114 .326l.204 .005c7.6 .218 8.61 3.428 2.553 8.065l-.102 .075l.055 .178c1.35 4.512 1.04 7.137 -1.556 7.24l-.163 .003z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutCardsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout-cards" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z" /> <path d="M18 3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconShieldCheckFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-shield-check" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconChessBishopFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-chess-bishop" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2a2 2 0 0 1 1.386 3.442c.646 .28 1.226 .62 1.74 1.017l-3.833 3.834l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l3.814 -3.813c.977 1.35 1.479 3.07 1.479 5.106c0 1.913 -1.178 3.722 -3.089 3.973l-.2 .02l-.211 .007h-5c-2.126 0 -3.5 -1.924 -3.5 -4c0 -3.68 1.57 -6.255 4.613 -7.56a2 2 0 0 1 1.387 -3.44z" /> <path d="M12 5v1" /> <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconManFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-man" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15 8c1.628 0 3.2 .787 4.707 2.293a1 1 0 0 1 -1.414 1.414c-.848 -.848 -1.662 -1.369 -2.444 -1.587l-.849 5.944v4.936a1 1 0 0 1 -2 0v-4h-2v4a1 1 0 0 1 -2 0v-4.929l-.85 -5.951c-.781 .218 -1.595 .739 -2.443 1.587a1 1 0 1 1 -1.414 -1.414c1.506 -1.506 3.08 -2.293 4.707 -2.293z" /> <path d="M12 1a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLivePhotoFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-live-photo" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 6a6 6 0 1 1 -6 6l.004 -.225a6 6 0 0 1 5.996 -5.775m0 4a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m3.9 9.11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m3.14 -2.5a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m1.73 -3.61a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m0 -4a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m-1.73 -3.61a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-3.14 -2.5a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-3.9 -.89a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-3.9 .89a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-3.14 2.5a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-1.73 3.61a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m0 4a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m1.73 3.61a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m3.14 2.5a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m3.9 .89a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGraphFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-graph" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12zm-2.293 6.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 -1.414l-2 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBinocularsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-binoculars" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8.887 6.748c-.163 0 -.337 .016 -.506 .057c-.172 .041 -.582 .165 -.838 .562l-.014 .02l-.607 1.05c-.307 .205 -.534 .46 -.693 .717l-.014 .02l-2.572 4.65a4.009 4.009 0 0 0 -.274 .494l-.006 .01a3.99 3.99 0 0 0 -.363 1.672a4 4 0 0 0 8 0v-1h2v1a4 4 0 1 0 7.635 -1.67l-.004 -.012a4.008 4.008 0 0 0 -.274 -.494l-2.572 -4.65l-.014 -.02a2.337 2.337 0 0 0 -.693 -.716l-.607 -1.051l-.014 -.02c-.256 -.397 -.667 -.52 -.838 -.562a2.225 2.225 0 0 0 -.664 -.051a2.06 2.06 0 0 0 -.68 .156c-.184 .081 -.638 .327 -.754 .889l-.007 .037l-.14 1.1c-.22 .283 -.374 .64 -.374 1.064v1h-2v-1c0 -.424 -.154 -.781 -.373 -1.064l-.14 -1.1l-.008 -.037c-.116 -.562 -.57 -.808 -.754 -.889a2.06 2.06 0 0 0 -.68 -.156a2.374 2.374 0 0 0 -.158 -.006zm-1.887 7.252a2 2 0 1 1 -1.838 1.209l.19 -.342c.36 -.523 .964 -.867 1.648 -.867zm10 0c.684 0 1.288 .344 1.648 .867l.19 .342a2 2 0 1 1 -1.838 -1.209z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCardsFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cards" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10.348 3.169l-7.15 3.113a2 2 0 0 0 -1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142 -3.11a2.002 2.002 0 0 0 1.036 -2.611l-4.92 -11.894a1.96 1.96 0 0 0 -2.588 -1.064z" /> <path d="M16 3a2 2 0 0 1 1.995 1.85l.005 .15v3.5a1 1 0 0 1 -1.993 .117l-.007 -.117v-3.5h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /> <path d="M19.08 5.61a1 1 0 0 1 1.31 -.53c.257 .108 .505 .21 .769 .314a2 2 0 0 1 1.114 2.479l-.056 .146l-2.298 5.374a1 1 0 0 1 -1.878 -.676l.04 -.11l2.296 -5.371l-.366 -.148l-.402 -.167a1 1 0 0 1 -.53 -1.312z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandSpotifyFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-spotify" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-2.168 11.605c-1.285 -1.927 -4.354 -2.132 -6.387 -.777a1 1 0 0 0 1.11 1.664c1.195 -.797 3.014 -.675 3.613 .223a1 1 0 1 0 1.664 -1.11m1.268 -3.245c-2.469 -1.852 -5.895 -2.187 -8.608 -.589a1 1 0 0 0 1.016 1.724c1.986 -1.171 4.544 -.92 6.392 .465a1 1 0 0 0 1.2 -1.6m1.43 -3.048c-3.677 -2.298 -7.766 -2.152 -10.977 -.546a1 1 0 0 0 .894 1.788c2.635 -1.317 5.997 -1.437 9.023 .454a1 1 0 1 0 1.06 -1.696" /> </svg>
		 ),
	},
	{
	 	 key: 'IconFolderFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-folder" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconAlarmFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-alarm" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 2.928a1 1 0 0 0 -1 1v3l.007 .117a1 1 0 0 0 .993 .883h2l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.993 -.883h-1v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" /> <path d="M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z" /> <path d="M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconGiftCardFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-gift-card" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M18 4a4 4 0 0 1 3.995 3.8l.005 .2v8a4 4 0 0 1 -3.8 3.995l-.2 .005h-12a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-5.493 5l-.19 .004c-.928 .052 -1.719 .583 -2.317 1.444c-.56 -.805 -1.288 -1.322 -2.139 -1.428l-.198 -.017l-.164 -.003l-.16 .005c-1.28 .086 -2.339 1.179 -2.339 2.495c0 1.226 1.222 2.211 2.453 2.447l.16 .026l-1.32 1.32l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l2.293 -2.292l2.293 2.292l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.32 -1.32c1.229 -.169 2.502 -1.11 2.606 -2.315l.007 -.158l-.005 -.163c-.08 -1.189 -1.02 -2.162 -2.175 -2.316l-.159 -.016l-.154 -.005zm-.025 2l.102 .009c.194 .04 .367 .21 .407 .406l.009 .085l-.012 .031l-.034 .04c-.13 .135 -.513 .369 -.836 .42l-.118 .009h-.602l.052 -.1l.088 -.156c.27 -.444 .574 -.696 .852 -.738l.092 -.006zm-4.964 0l.084 .005l.094 .02c.254 .077 .523 .32 .765 .718l.09 .157l.05 .1h-.601l-.106 -.008c-.398 -.057 -.894 -.4 -.894 -.492c0 -.23 .194 -.446 .416 -.491l.102 -.01z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBasketFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-basket" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M15.949 3.684l1.104 3.316h1.947a3 3 0 0 1 2.962 3.477l-1.252 7.131a4 4 0 0 1 -3.954 3.392h-9.512a3.994 3.994 0 0 1 -3.95 -3.371l-1.258 -7.173a3 3 0 0 1 2.964 -3.456h1.945l1.105 -3.316a1 1 0 0 1 1.898 .632l-.895 2.684h5.893l-.895 -2.684a1 1 0 1 1 1.898 -.632m-3.949 7.316a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCirclePercentageFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-circle-percentage" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72m3 12.12a1 1 0 0 0 -1 1v.015a1 1 0 0 0 2 0v-.015a1 1 0 0 0 -1 -1m.707 -5.752a1 1 0 0 0 -1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6 -6a1 1 0 0 0 0 -1.414m-6.707 -.263a1 1 0 0 0 -1 1v.015a1 1 0 1 0 2 0v-.015a1 1 0 0 0 -1 -1" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCashBanknoteFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cash-banknote" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M19 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3zm-7 4a3 3 0 0 0 -2.996 2.85l-.004 .15a3 3 0 1 0 3 -3m6.01 2h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-12 0h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHelpCircleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-help-circle" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconPhotoFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-photo" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMoonFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-moon" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconLayoutFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-layout" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 3a3 3 0 0 1 3 3v1a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-1a3 3 0 0 1 3 -3z" /> <path d="M8 12a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-3a3 3 0 0 1 3 -3z" /> <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconZoomScanFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-zoom-scan" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2h-2a3 3 0 0 1 -3 -3v-2a1 1 0 0 1 1 -1" /> <path d="M20 15a1 1 0 0 1 1 1v2a3 3 0 0 1 -3 3h-2a1 1 0 0 1 0 -2h2a1 1 0 0 0 1 -1v-2a1 1 0 0 1 1 -1" /> <path d="M11 7a4 4 0 0 1 3.446 6.031l2.261 2.262a1 1 0 0 1 -1.414 1.414l-2.262 -2.26l-.031 .017a4 4 0 0 1 -6 -3.464l.005 -.2a4 4 0 0 1 3.995 -3.8" /> <path d="M8 3a1 1 0 1 1 0 2h-2a1 1 0 0 0 -1 1v2a1 1 0 1 1 -2 0v-2a3 3 0 0 1 3 -3z" /> <path d="M18 3a3 3 0 0 1 3 3v2a1 1 0 0 1 -2 0v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 0 -2z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconBrandDribbbleFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-brand-dribbble" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14.384 14.38a22.877 22.877 0 0 1 1.056 4.863l.064 .644l.126 1.431a10 10 0 0 1 -9.15 -.98l2.08 -2.087l.246 -.24c1.793 -1.728 3.41 -2.875 5.387 -3.566l.191 -.065zm6.09 -.783l.414 .003l.981 .014a9.997 9.997 0 0 1 -4.319 6.704l-.054 -.605c-.18 -2.057 -.55 -3.958 -1.163 -5.814c1.044 -.182 2.203 -.278 3.529 -.298l.611 -.004zm-7.869 -3.181a24.91 24.91 0 0 1 1.052 2.098c-2.276 .77 -4.142 2.053 -6.144 3.967l-.355 .344l-2.236 2.24a10 10 0 0 1 -2.917 -6.741l-.005 -.324l.004 -.25h1.096l.467 -.002c3.547 -.026 6.356 -.367 8.938 -1.295l.1 -.037zm9.388 1.202l-1.515 -.02c-1.86 -.003 -3.45 .124 -4.865 .402a26.112 26.112 0 0 0 -1.163 -2.38c1.393 -.695 2.757 -1.597 4.179 -2.75l.428 -.354l.816 -.682a10 10 0 0 1 2.098 5.409l.022 .375zm-14.663 -8.46l1.266 1.522c1.145 1.398 2.121 2.713 2.949 3.985c-2.26 .766 -4.739 1.052 -7.883 1.081l-.562 .004h-.844a10 10 0 0 1 5.074 -6.593zm9.67 .182c.53 .306 1.026 .657 1.483 1.046l-1.025 .857c-1.379 1.128 -2.688 1.993 -4.034 2.649c-.89 -1.398 -1.943 -2.836 -3.182 -4.358l-.474 -.574l-.485 -.584a10 10 0 0 1 7.717 .964z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconMilitaryRankFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-military-rank" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.555 2.168l6 4a1 1 0 0 1 .445 .832v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-12a1 1 0 0 1 .445 -.832l6 -4a1 1 0 0 1 1.11 0m-.108 12.938a1 1 0 0 0 -.894 0l-2 1a1 1 0 0 0 -.447 1.341l.058 .102a1 1 0 0 0 1.283 .345l1.553 -.776l1.553 .776a1 1 0 0 0 .894 -1.788zm0 -4a1 1 0 0 0 -.894 0l-2 1a1 1 0 0 0 -.447 1.341l.058 .102a1 1 0 0 0 1.283 .345l1.553 -.776l1.553 .776a1 1 0 0 0 .894 -1.788zm0 -4a1 1 0 0 0 -.894 0l-2 1a1 1 0 0 0 -.447 1.341l.058 .102a1 1 0 0 0 1.283 .345l1.553 -.776l1.553 .776a1 1 0 0 0 .894 -1.788z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconCherryFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-cherry" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.588 5.191l.058 .045l.078 .074l.072 .084l.013 .018a.998 .998 0 0 1 .182 .727l-.022 .111l-.03 .092c-.99 2.725 -.666 5.158 .679 7.706a4 4 0 1 1 -4.613 4.152l-.005 -.2l.005 -.2a4.002 4.002 0 0 1 2.5 -3.511c-.947 -2.03 -1.342 -4.065 -1.052 -6.207c-.166 .077 -.332 .15 -.499 .218l.094 -.064c-2.243 1.47 -3.552 3.004 -3.98 4.57a4.5 4.5 0 1 1 -7.064 3.906l-.004 -.212l.005 -.212a4.5 4.5 0 0 1 5.2 -4.233c.332 -1.073 .945 -2.096 1.83 -3.069c-1.794 -.096 -3.586 -.759 -5.355 -1.986l-.268 -.19l-.051 -.04l-.046 -.04l-.044 -.044l-.04 -.046l-.04 -.05l-.032 -.047l-.035 -.06l-.053 -.11l-.038 -.116l-.023 -.117l-.005 -.042l-.005 -.118l.01 -.118l.023 -.117l.038 -.115l.03 -.066l.023 -.045l.035 -.06l.032 -.046l.04 -.051l.04 -.046l.044 -.044l.046 -.04l.05 -.04c4.018 -2.922 8.16 -2.922 12.177 0z" /> </svg>
		 ),
	},
	{
	 	 key: 'IconHeartFilled',
		 svg: (width, height, color, strokeWidth) => (
			 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={color} className="icon icon-tabler icons-tabler-filled icon-tabler-heart" > <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /> </svg>
		 ),
	},
]

export const IconsFilled = (key,width = 24, height = 24,color,strokeWidth) => {
    const foundIcon = iconList.find(icon => icon.key === key);

    return foundIcon ? foundIcon.svg(width || 24, height || 24, color, strokeWidth) : null;
};

export const GetAllFilledIcons = () => {
    return iconList;
}
