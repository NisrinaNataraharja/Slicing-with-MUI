import {GeneralIcon, SummaryIcon} from '../../assets/icon/icons'

export const General = [
	{
  	id:1,
  	nama:"GENERAL",
    icon: <GeneralIcon/>,
    sub_item: [
    	{
      	id:'1a',
        nama:"Information"
      },
      {
      	id:'1b',
        nama:"Aux"
      },
      {
      	id:'1c',
        nama:"Custome Report"
      }
    ]
  },
  {
    id:2,
    nama:"SUMMARY",
    icon: <SummaryIcon/>,
    sub_item: [
    	{
      	id:'2a',
        nama:"Category"
      },
      {
      	id:'2b',
        nama:"Subcategory"
      },
      {
      	id:'2c',
        nama:"Custome Field"
      }
    ]
  }
]