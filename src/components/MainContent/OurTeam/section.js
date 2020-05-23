import React from 'react';
//import logo from './logo.svg';
//import Header from './components/header';
//import TeammemberPicture from './components/teamMemberPicture';
import Teammember from './teamMember'
//import Teammemberpicture from './components/teamMemberPicture';
import zaki_path from './../../../images/zaki.png'
import mubeen_path from './../../../images/mubeen.png'
import sheeda_path from './../../../images/sheeda.png'
import lord_path from './../../../images/lord.png'
import bhatti_path from './../../../images/bhatti.png'
import nushirvan_path from './../../../images/nushirvan.png'
import amaaz_path from './../../../images/amaaz.png'
import sample_image_path from './../../../images/run_logo.png'
//import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
//import { cpus } from 'os';

function Section() {
  return (
    <div>
      <Row style = {{backgroundColor:'#040404',opacity:'0.91',padding:'30px', display:'flex', flexDirection: 'row',justifyContent:'space-around', margin:"0px"}}>
      <Col><Teammember mypicture ={zaki_path} height={'250px'} width ={'250px'} name={'Zaki Rathore'} text = {'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.Exerci tation ullamcorper autem Exerci tation.'}/></Col>
      <Col><Teammember mypicture ={sheeda_path} height={'250px'} width ={'250px'} name={'Muhammad Usman'}text = {'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.Exerci tation ullamcorper autem Exerci tation.'}/></Col>
      <Col><Teammember mypicture ={mubeen_path} height={'250px'} width ={'250px'} name={'Mubeen Elahi'} text = {'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.Exerci tation ullamcorper autem Exerci tation.'}/></Col>
      <Col><Teammember mypicture ={lord_path} height={'250px'} width ={'250px'} name={'Hamza Majeed'} text = {'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.Exerci tation ullamcorper autem Exerci tation.'}/></Col>
     
      
      
      </Row>

<Row style = {{backgroundColor:'#040404',opacity:'0.91',paddingBottom:'10px', display:'flex', flexDirection: 'row',justifyContent:'space-around', marginLeft:"60px", marginRight:"60px"}}>
<Col><Teammember mypicture ={amaaz_path} height={'250px'} width ={'250px'} name={'Amaaz Ahmad'} text = {'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.Exerci tation ullamcorper autem Exerci tation.'}/></Col>
      
      <Col><Teammember mypicture ={nushirvan_path} height={'250px'} width ={'250px'} name={'Nushirvan Naseer'} text = {'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.Exerci tation ullamcorper autem Exerci tation.'}/></Col>
      
      <Col><Teammember mypicture ={bhatti_path} height={'250px'} width ={'250px'} name={'Anas Bhatti'} text = {'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo non habent claritatem insitamconse quat duis autem Exerci tation.Exerci tation ullamcorper autem Exerci tation.'}/></Col>
      

</Row>
</div>
      
  );
}

export default Section;