import {teamdata} from '../constant/teamdata.js'
const  getTeamData = (req,res)=>{
    try {
    res.json({
      success: true,
      data: teamdata,
      message: 'Team data fetched successfully',
      count: teamdata.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching team data',
      error: error.message
    });
  }
}
export {getTeamData};