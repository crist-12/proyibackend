const { parse } = require('dotenv');
var express = require('express');
var router = express.Router();
var SwotDao = require('./swot.dao');
var Swot = new SwotDao();
const mailSender = require("../../../utils/mailer");
//const upload = require('../../../utils/storage')



//New
router.post('/new', async (req, res, next) =>{

  const arrayfrases = [
    ' Cuando descubres tu naturaleza esencial y sabes quién eres verdaderamente, en ese conocimiento se encuentra la capacidad de realizar cualquier sueño que puedas tener, pues tú eres la eterna posibilidad.',
    'Un hombre sabio se procurará más oportunidades de las que se presentan.',
    'Todo fracaso es una oportunidad. No hay fracaso sino cambio de camino. Si no acepto el camino, fracaso. ',
    'La vida es muy compasiva; la existencia es muy misericordiosa. Te ofrece una posibilidad tras otra; oportunidades tras oportunidades.',
    'Hay tres cosas que nunca vuelven atrás: la palabra pronunciada, la flecha disparada y la oportunidad perdida. ',
    'Las pequeñas oportunidades son el principio de las grandes empresas.',
    'El deseo intenso crea no solo sus oportunidades sino, además, sus propios talentos. ',
    'Desarrollar un talento no es crearlo, es hacer crecer un don que ha nacido con nosotros, poniendo en ello la energía que solo dedicamos a las cosas que más nos importan.',
    'No podemos dejar nunca que cada día parezca igual al anterior, porque todos los días son diferentes. Presta atención a todos los momentos, porque la oportunidad, el instante mágico, está a nuestro alcance.',
    'Tengo un día, si lo sé aprovechar, tengo un tesoro. '
  ]

  var frase = arrayfrases[Math.floor(Math.random()*arrayfrases.length)];

  try{
    const {
      title,
      message,
      to,
      ruta
    } = req.body;

    const userE = await Swot.getUser(req.user._id);
    console.log(ruta);
    const result = await Swot.addNew(title, message, to, ruta, req.user._id);
     mailSender(
      to, 
      title, 
      `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>
        
          <style type="text/css">
            table, td { color: #000000; } a { color: #22225f; text-decoration: none; }
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }
      
        .u-row .u-col-100 {
          width: 600px !important;
        }
      
      }
      
      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: calc(100% - 40px) !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }
      
      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }
      
      p {
        margin: 0;
      }
      
      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }
      
      * {
        line-height: inherit;
      }
      
      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }
      
      </style>
        
        
      
      <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
      
      </head>
      
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
          
      
      <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #34495e;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #34495e;"><![endif]-->
            
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
        
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px;font-family:'Lato',sans-serif;" align="left">
              
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right: 0px;padding-left: 0px;" align="center">
          
            <img align="center" border="0" src="https://s3.amazonaws.com/unroll-images-production/projects%2F0%2F1638894988245-Logo.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 28%;max-width: 162.4px;" width="162.4"/>
            
          </td>
        </tr>
      </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
      
      <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f2f0eb;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f2f0eb;"><![endif]-->
            
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
        
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:21px 10px 0px;font-family:'Lato',sans-serif;" align="left">
        <div style="color: #010101; line-height: 140%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 72px; line-height: 100.8px;"><span style="font-size: 34px; line-height: 47.6px;">Nostalgia Drive</span><br /></span></p>
        </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
              
        <div style="line-height: 140%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;">Alguien especial ha pensado en mandarte un saludo.<br /></span></p>
        </div>
      </br>
      <div style="text-align: center; font-style: italic">
        <p>" ${message} "</p>
      </div>


            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:19px 44px 50px;font-family:'Lato',sans-serif;" align="left">
              
        <div style="color: #1b302b; line-height: 180%; text-align: center; word-wrap: break-word;">
          
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
              
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right: 0px;padding-left: 0px;" align="center">
            
            <img align="center" border="0" src="${ruta}" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 100%;" width="100"/>
            <a href="${ruta}">Descargar imagen</a>
            
          </td>
        </tr>
      </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:19px 44px 35px;font-family:'Lato',sans-serif;" align="left">
              
        <div style="color: #1b302b; line-height: 180%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 180%;">${frase}</p>
      <p style="font-size: 14px; line-height: 180%;">-2021-</p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
              
        <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="84%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <tbody>
            <tr style="vertical-align: top">
              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                <span>&#160;</span>
              </td>
            </tr>
          </tbody>
        </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
      
      <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f2f0eb;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f2f0eb;"><![endif]-->
            
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
        
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 10px;font-family:'Lato',sans-serif;" align="left">
              
        <div style="color: #444444; line-height: 140%; text-align: left; word-wrap: break-word;">
          <p style="line-height: 140%; text-align: center; font-size: 14px;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;"><span style="line-height: 19.6px; font-size: 14px;">S&Iacute;GUENOS</span></span></p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>

      
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 40px;font-family:'Lato',sans-serif;" align="left">
              
        <div style="color: #666666; line-height: 140%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 140%;">UNICAH</p>
      <p style="font-size: 14px; line-height: 140%;">SEMINARIO DE SOFTWARE</p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 40px 10px;font-family:'Lato',sans-serif;" align="left">
              
        <div style="color: #414b41; line-height: 140%; text-align: center; word-wrap: break-word;">
          <p style="line-height: 140%; font-size: 14px;"><span style="font-size: 12px; line-height: 16.8px;"><strong>&nbsp;</strong></span></p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
              
        <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #f8f8f8;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <tbody>
            <tr style="vertical-align: top">
              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                <span>&#160;</span>
              </td>
            </tr>
          </tbody>
        </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
      
      </html>`
      );

    console.log(result);
    res.status(200).json({msg:"Agregado exitosamente"});

  }catch (ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

//Get by User
router.get('/list', async (req, res, next)=>{
  try{
    const allSwotEntries = await Swot.getAll(req.user._id);

    //console.log(req.user);
    return res.status(200).json(allSwotEntries);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

//Get by Title
router.get('/bytitle/:title', async (req, res, next) =>{
  try{
    const {title} = req.params;
    const swots = await Swot.getByTitle(title, req.user._id);
    return res.status(200).json(swots);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

//Get by Receptor
router.get('/byreceptor/:receptor', async (req, res, next) =>{
  try{
    const {receptor} = req.params;
    const swots = await Swot.getByReceptor(receptor, req.user._id);
    return res.status(200).json(swots);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

//Get by Message ID
router.get('/getid/:id', async (req, res, next) =>{
  try{
    const {id} = req.params;
    const SwotEntry = await Swot.getid(id);
    return res.status(200).json(SwotEntry);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

//Find & Items per page
router.get('/facet/:page/:items', async (req, res, next)=> {
  try {
    let {page, items}  = req.params;
    page = parseInt(page) || 1;
    items = parseInt(items) || 10;

    const swots = await Swot.getByFacet('', page, items, req.user._id);

    return res.status(200).json(swots);
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
}); // facet

//Get by Date
router.get('/bydate/:date1/:date2/:extremes', async (req, res, next) =>{
  try{
    const {lower, upper, extremes} = req.params;
    const filter = (parseInt(extremes) > 0) ?  {
      swotRelevance: {
        "$gte": parseFloat(lower),
        "$lte": parseFloat(upper),
      }
    }
    :
    {
      swotRelevance: {
        "$gt": parseFloat(lower),
        "$lt": parseFloat(upper),
      }
    };
    const swots = await Swot.getWithFilterAndProjection(filter, {});
    return res.status(200).json(swots);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

//Aggregate Data
router.get('/dashboard', async (req, res, next) =>{
  try{
    const swots = await Swot.getAggregatedData(req.user._id);
    return res.status(200).json(swots);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

//Update by ID
router.put('/update/:id', async (req, res, next) =>{
  try{
    const {id} = req.params;
    const {message, to} = req.body;
    const result = await Swot.updateMessage(message, to, id);
    console.log(result);
    return res.status(200).json({msg:"Actualizado"});
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al actualizar"});
  }
});

//Delete by ID
router.delete('/delete/:id', async (req, res, next) =>{
  try{
    const {id} = req.params;
    const result = await Swot.deleteById(id);
    console.log(result);
    return res.status(200).json({msg:"Eliminado"});
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al eliminar"});
  }
});

router.get('/fix', async (req, res, next) =>{
  try{
    let swots = await Swot.getWithFilterAndProjection(
      {},
      {_id:1, swotRelevance:1}
    );
    swots.map( async (o) => {
      await Swot.updateRelevanceRandom(o._id);
    });
    return res.status(200).json(swots);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

router.get('/facet/:page/:items/:text', async (req, res, next) =>{
  try{
    let {page, items, text} = req.params;
    page = parseInt(page) || 1;
    items = parseInt(items) || 10;
    
    const swots = await Swot.getByFacet(text, page, items, req.user._id);
    return res.status(200).json(swots);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

module.exports = router;