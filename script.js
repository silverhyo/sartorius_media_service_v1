// =====================================================================specialist 정보창
let specialistContainer = document.getElementById("specialistcontainer");

function openSpecialistWindow() {
  specialistContainer.style.display = "flex";
}
let openSpecialistWindowButton = document.getElementById(
  "openspecialistwindow"
);
openSpecialistWindowButton.addEventListener("click", openSpecialistWindow);

function closeSpecialistWindow() {
  specialistContainer.style.display = "none";
}
let closeButton1 = document.getElementById("closebutton01");
closeButton1.addEventListener("click", closeSpecialistWindow);
// ========================================================================================

let list = document.getElementById("list");
let filter = document.querySelector(".filter");
let count = document.querySelector("#count");
let listProducts = [

  //CHO(70~100)

  {
    id: 70,
    name: '4Cell SmartCHO media',
    dataname: 'p_70',
    price: 100,
    brand: 'Sartorius',
    image: 'image_smart/Sartorius_4Cell-SmartCHO-Stock+Adaption-Medium-Liquid-1L-B-0002845-White.jpg',
    datasheet:'datasheet/70.CHO-Media-and-Feed-Portfolio-Datasheet.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['mAb'],
      cellline: ['CHO', 'DG44', 'K1', 'S', 'GS'],
      mediatype: ['Liquid', 'Powder'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Process : Fed-Batch',
      description02: '▶ Chemically Defined ',
      description03: '▶ Serum-Free / Animal Component-Free',
      description04: '▶ For Further Manufacturing (생산용)',
      description05: '▶ Bottles or Bags (다양한 pack size)',
      description06: '▶ Production Method : Stable Expression',
      description07: '▶ Stock&Adaptation medium + Production medium + Feed A,B',
      description08: '▶ Sample : 가능',
      description09: ' ',
    }
  },

  {
    id: 71,
    name: '4Cell SmartCHOpe media',
    dataname: 'p_71',
    price: 100,
    brand: 'Sartorius',
    image: 'image_smart/Sartorius 4Cell-SmartCHOpe-Production-Medium-Powder-50L-B-0002857-White.jpg',
    datasheet:'datasheet/71.CHO-Media-and-Feed-Portfolio-Datasheet.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['mAb'],
      cellline: ['CHO', 'DG44', 'K1', 'S', 'GS'],
      mediatype: ['Powder'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Process : Perfusion',
      description02: '▶ Stock & Adaptation medium + Production medium + Feed A, B',
      description03: '▶ Chemically Defined',
      description04: '▶ Serum-Free / Animal Component-Free',
      description05: '▶ For Further Manufacturing (생산용)',
      description06: '▶ Bottles or Bags (다양한 pack size)',
      description07: '▶ Sample : 가능',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 72,
    name: 'TCX10D',
    dataname: 'p_72',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/TCX10D_Medium.jpg',
    datasheet:'datasheet/72.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['mAb'],
      cellline: ['GS', 'CHO'],
      mediatype: ['Liquid', 'Powder'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Chemically defined',
      description02: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description03: '▶ Little or no adaptation required from other serum-free media',
      description04: '▶ w/o L-glutamine',
      description05: '▶ w/ HT (Hypoxanthine/Thymidine)',
      description06: '▶ w/o HEPES',
      description07: '▶ w/ NaHCO3',
      description08: '▶ For Further Manufacturing (생산용)',
      description09: '▶ Bottles or Bags (다양한 pack size)',
    }
  },

  {
    id: 73,
    name: 'CHOlean',
    dataname: 'p_73',
    price: 100,
    brand: 'Sartorius',
    image: 'image_smart/CHOlean Medium.jpg',
    datasheet:'datasheet/73.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['mAb'],
      cellline: ['CHO', 'DG44', 'K1', 'S', 'GS'],
      mediatype: ['Liquid', 'Powder'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Chemically defined',
      description02: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description03: '▶ Little or no adaptation required from other serum-free media∙w/o L-glutamine',
      description04: '▶ w/o growth factor',
      description05: '▶ w/o HT (hypoxanthine/thymidine)',
      description06: '▶ w/o HEPES',
      description07: '▶ w/ NaHCO3',
      description08: '▶ For Further Manufacturing (생산용)',
      description09: '▶ Bottles or Bags (다양한 pack size)',
    }
  },

  {
    id: 74,
    name: 'TCX6D',
    dataname: 'p_74',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/TCX6D Medium.jpg',
    datasheet:'datasheet/74.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['mAb'],
      cellline: ['CHO', 'DG44', 'K1', 'S'],
      mediatype: ['Liquid'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Chemically defined',
      description02: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description03: '▶ Little or no adaptation is required from other serum-free media',
      description04: '▶ Supports stable growth of suspension cells at high viability in seed train culture',
      description05: '▶ with Growth factor LONG®R3IGF-I',
      description06: '▶ w/o L-glutamine',
      description07: '▶ w/ HT (Hypoxanthine/Thymidine)',
      description08: '▶ For Further Manufacturing (생산용)',
      description09: '▶ Bottles or Bags (다양한 pack size)',
    }
  },

  {
    id: 75,
    name: 'TC-42 w/o GF medium',
    dataname: 'p_75',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/TC-42_without_Growth_Hormone.jpg',
    datasheet:'datasheet/75.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: [''],
      cellline: ['CHO', 'DG44', 'K1', 'S'],
      mediatype: ['Liquid', 'Powder'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Chemically defined',
      description02: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description03: '▶ Little or no adaptation is required from other serum-free media',
      description04: '▶ w/o L-glutamine',
      description05: '▶ w/o HT (hypoxanthine/thymidine)',
      description06: '▶ For Further Manufacturing (생산용)',
      description07: '▶ Bottles or Bags (다양한 pack size)',
      description08: '',
      description09: '',
    }
  },

  {
    id: 76,
    name: 'TCX7D Feed',
    dataname: 'p_76',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/TCX7D_Medium.jpg',
    datasheet:'datasheet/76.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['mAb'],
      cellline: ['GS', 'CHO'],
      mediatype: ['Liquid', 'Powder'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Chemically defined',
      description02: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description03: '▶ Little or no adaptation required from other serum-free media',
      description04: '▶ w/o L-glutamine',
      description05: '▶ w/ HT (Hypoxanthine/Thymidine)',
      description06: '▶ Bottles or Bags (다양한 pack size)',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 77,
    name: 'CHO TF',
    dataname: 'p_77',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/CHO_TF.jpg',
    datasheet:'datasheet/77.CHO-Media-and-Feed-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['mAb'],
      cellline: ['CHO', 'DG44', 'K1', 'S', 'GS'],
      mediatype: ['Liquid', 'Powder'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Chemically defined',
      description02: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description03: '▶ Little or no adaptation required from other serum-free media',
      description04: '▶ Compatibility with cationic transfection reagents (e.g. PEI) facilitates simplified transfection',
      description05: '▶ w/o L-glutamine',
      description06: '▶ w/o growth factor',
      description07: '▶ Bottles or Bags (다양한 pack size)',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 78,
    name: 'HEK GM',
    dataname: 'p_78',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/HEK_GM.jpg',
    datasheet:'datasheet/78.HEK-Media-and-Feed-Portfolio-Datasheet-en-B-Sartorius.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
      cellline: ['HEK293', 'HEK293T', 'HEK293F-3F6(NRC)'],
      mediatype: ['Liquid', 'Powder'], 
      description01: '▶ Chemically defined',
      description02: '▶ Production Method : Infection / Induction',
      description03: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description04: '▶ Little or no adaptation required from other serum-free media',
      description05: '▶ Supports stable growth of suspension cells at high viability in seed train culture',
      description06: '▶ w/ HT (hypoxanthine/thymidine)',
      description07: '▶ w/ Growth Factor',
      description08: '▶ w/ Anti crumping agent',
      description09: '▶ w/o L-glutamine',
    }
  },

  {
    id: 79,
    name: 'HEK TF',
    dataname: 'p_79',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/HEK_TF.jpg',
    datasheet:'datasheet/79.HEK-Media-and-Feed-Portfolio-Datasheet-en-B-Sartorius.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
      cellline: ['HEK293', 'HEK293T', 'HEK293F-3F6(NRC)'],
      mediatype: ['Liquid', 'Powder'],  
      description01: '▶ Medium ~ High Nutrient',
      description02: '▶ Chemically defined',
      description03: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description04: '▶ Little or no adaptation required from other serum-free media',
      description05: '▶ Feasible for microcarrier bead production processes',
      description06: '▶ w/ HT (Hypoxanthine / Thymidine)',
      description07: '▶ w/ Growth Factor',
      description08: '▶ w/o L-glutamine',
      description09: '▶ Bottles or Bags (다양한 pack size)',
    }
  },

  {
    id: 80,
    name: 'HEK ViP_NB',
    dataname: 'p_80',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/HEK ViP NB Medium.jpg',
    datasheet:'datasheet/80.HEK-Media-and-Feed-Portfolio-Datasheet-en-B-Sartorius.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
      cellline: ['HEK293', 'HEK293T', 'HEK293F-3F6(NRC)'],
      mediatype: ['Liquid', 'Powder'],  
      description01: '▶ Medium ~ High Nutrient',
      description02: '▶ Chemically defined',
      description03: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description04: '▶ Little or no adaptation required from other serum-free media',
      description05: '▶ Optimized for virus/viral vector production',
      description06: '▶ Feasible for microcarrier bead production processes',
      description07: '▶ w/ HT (Hypoxanthine/Thymidine)',
      description08: '▶ w/o L-glutamine | phenol red | Growth Factor',
      description09: ' ',
    }
  },

  {
    id: 81,
    name: 'HEK ViP NX',
    dataname: 'p_81',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/HEK-ViP-NX-Medium.jpg',
    datasheet:'datasheet/81.HEK-Media-and-Feed-Portfolio-Datasheet-en-B-Sartorius',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
      cellline: ['HEK293', 'HEK293T', 'HEK293F-3F6(NRC)'],
      mediatype: ['Liquid', 'Powder'],  
      description01: '▶ Highest Nutrient',
      description02: '▶ Chemically defined',
      description03: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description04: '▶ Little or no adaptation required from other serum-free media',
      description05: '▶ Optimized for virus/viral vector production',
      description06: '▶ Feasible for microcarrier bead production processes',
      description07: '▶ w/ HT (Hypoxanthine/Thymidine)',
      description08: '▶ w/o L-glutamine | Growth Factor',
      description09: '▶ Production Method : Transfection / Infection / Induction',
    }
  },

  {
    id: 82,
    name: 'HEK FS_2 Feed',
    dataname: 'p_82',
    price: 100,
    brand: 'Sartorius',
    image: 'image_smart/HEK_FS_2_Feed.jpg',
    datasheet:'datasheet/82.HEK-Media-and-Feed-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
      cellline: [''],
      mediatype: ['Liquid', 'Powder'],  
      description01: '▶ Chemically defined',
      description02: '▶ Serum-Free / Animal Component-Free / Hydrolysate-Free',
      description03: '▶ Little or no adaptation required from other serum-free media',
      description04: '▶ w/o L-glutamine',
      description05: '▶ Bottles or Bags (다양한 pack size)',
      description06: '',
      description07: '',
      description08: '',
      description09: '',
    }
  },

  {
    id: 83,
    name: 'MDXK',
    dataname: 'p_83',
    price: 100,
    brand: 'Sartorius(Xell)',
    image: 'image_smart/Xell MDXK Liquid.jpg',
    datasheet:'./datasheet',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
      cellline: ['MDCK', 'MDBK'],
      mediatype: ['Liquid', 'Powder'],  
      description01: '▶ Chemically Defined',
      description02: '▶ Animal Component-Free / Protein-Free',
      description03: '▶ For Further Manufacturing (생산용)',
      description04: '▶ Bottles or Bags (다양한 pack size)',
      description05: ' ',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 84,
    name: 'BHK',
    dataname: 'p_84',
    price: 100,
    brand: 'Sartorius',
    image: 'image_smart/4Cell-BHK-21-1L-Bottle-en-B-0000130-White-Sartorius.jpg',
    datasheet:'datasheet/84.4Cell-BHK-21-CD-Medium-Datasheet-en-B-2570068-Sartorius.pdf',
    download: '',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
      cellline: ['BHK-21_Cell'],
      mediatype: ['Liquid', 'Powder'],  
      description01: '▶ Chemically Defined',
      description02: '▶ Animal Component-Free / Protein-Free',
      description03: '▶ For Further Manufacturing (생산용)',
      description04: '▶ Bottles or Bags (다양한 pack size)',
      description05: ' ',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 85,
    name: '4CellNutriVero',
    dataname: 'p_85',
    price: 100,
    brand: 'Sartorius',
    image: 'image_smart/4Cell-NutriVero-1L-Bottle-en-B-0000326-White-Sartorius.jpg',
    datasheet:'datasheet/85.4Cell-NutriVero-Flex-10-Medium-Datasheet-en-B',
    download: '85.4Cell-NutriVero-Flex-10-Medium-Datasheet-en-B.pdf',
    incharge: '01072952028',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Vaccine', 'CGT', 'mAb', 'Proteins'],
      cellline: ['VERO'],
      mediatype: ['Liquid', 'Powder'],  
      description01: '▶ Chemically Defined',
      description02: '▶ Serum-Free / Animal Component-Free',
      description03: '▶ Recombinant Protein (Very low conc. 5mg/L)',
      description04: '▶ For Further Manufacturing (생산용)',
      description05: '▶ Bottles or Bags (다양한 pack size)',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  
  //Cellgenix(01~20)
  {
    id: 1,
    name: 'Cellgenix GMP SCGM Medium',
    dataname: 'p_01',
    price: 100,
    brand: 'Sartorius (Cellgenix)',
    image: 'image_cellgenix/CellGenix_SCGM_Bottle_Bag_PhenolRed.jpg',
    datasheet:'datasheet/01.Data-Sheet_GMP-SCGM_ME-DS-2002f.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['HSC', 'NK_Cell'],
      mediatype: ['Liquid'],  // HTML <option value="">에서 따옴표 사이와 여기 배열안의 단어가 똑같아야 함!!
      description01: '▶ Serum-Free, Xeno-Free',
      description02: '▶ GMP grade',
      description03: '▶ DMF: US, Japan',
      description04: '▶ HSC, NK 세포 배양 배지',
      description05: '▶ [20802-0500] Cellgenix GMP SCGM Medium',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },
  {
    id: 2,
    name: 'Cellgenix GMP DC Medium',
    dataname: 'p_02',
    price: 100,
    brand: 'Sartorius (Cellgenix)',
    image: 'image_cellgenix/CellGenix_DC_Bottle_Bag_wo_PhenolRed.jpg',
    datasheet:'datasheet/02.Data Sheet_GMP DC_ME-DS-2001j.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['Dendritic_Cell'],
      mediatype: ['Liquid'],
      description01: '▶ Serum-Free, Xeno-Free',
      description02: '▶ GMP grade',
      description03: '▶ For Research and Further Manufacturing',
      description04: '▶ US FDA DMF',
      description05: '▶ Dendritic cell (DC) 세포 배양 배지',
      description06: '▶ [20801-0500] CellGenix® GMP DC Medium, Phenol Red',
      description07: '▶ [20805-0500] CellGenix® GMP DC Medium, Phenol Red Free',
      description08: ' ',
      description09: ' ',
    }
  },
  { 
    id: 3,
    name: 'Cellgenix GMP TCM Medium',
    dataname: 'p_03',
    price: 100,
    brand: 'Sartorius (Cellgenix)',
    image: 'image_cellgenix/CellGenix-TCM-GMP-Bottle-500ML-en-B.jpg',
    datasheet:'datasheet/03.Data Sheet_GMP TCM_ME-DS-2014d.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['T_Cell'],
      mediatype: ['Liquid'],
      description01: '▶ Serum-Free, Xeno-Free',
      description02: '▶ GMP grade',
      description03: '▶ For Research and Further Manufacturing',
      description04: '▶ T, CAR-T 세포 배양 배지',
      description05: '▶ [20814-0500] Cellgenix GMP TCM Medium',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },
  {
    id: 4,
    name: 'Cellgenix Recombinant Cytokines & Growth Factors_Preclinical',
    dataname: 'p_04',
    price: 100,
    brand: 'Sartorius (Cellgenix)',
    image: 'image_cellgenix/CellGenix-Recombinant-Cytokines&Growth-Factors-Pre.jpg',
    datasheet:'datasheet/04.CellGenix-Preclinical-GMP-Cytokine-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['Mammalian_Cell', 'Stem_Cell', 'Immune_Cell', 'Primary_Cell'],
      mediatype: ['Powder'],
      description01: '▶ E.coli-derived recombinant protein',
      description02: '▶ Lyophilized powder',
      description03: '▶ Intended for preclinical ex vivo use',
      description04: ' ',
      description05: ' ',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },
  {
    id: 5,
    name: 'Cellgenix Recombinant Cytokines & Growth Factors_GMP',
    dataname: 'p_05',
    price: 100,
    brand: 'Sartorius (Cellgenix)',
    image: 'image_cellgenix/CellGenix-Recombinant-Cytokines&Growth-Factors-GMP.jpg',
    datasheet:'datasheet/05.CellGenix-Preclinical-GMP-Cytokine-Portfolio-Datasheet-en-B.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['Mammalian_Cell', 'Stem_Cell', 'Immune_Cell', 'Primary_Cell'],
      mediatype: ['Powder'],
      description01: '▶ E.coli-derived recombinant protein',
      description02: '▶ Lyophilized powder',
      description03: '▶ GMP grade',
      description04: ' ',
      description05: ' ',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  //Rooster Bio
  {
    id: 6,
    name: 'RoosterVial',
    dataname: 'p_06',
    price: 100,
    brand: 'Sartorius (RoosterBio)',
    image: 'image_roosterbio/RoosterVial.jpg',
    datasheet:'datasheet/06.RBI_Product_Tech_Sheet_RoosterVial.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['MSC_Cell_Therapy'],
      cellline: ['MSC'],
      mediatype: ['Liquid'],
      description01: '▶ MSC WCB (P2 or P3) vial',
      description02: '▶ Bone Marrow, Umbilical Cord(WJC), Adipose 유래 세포',
      description03: '▶ Research grade/Clinical grade',
      description04: '▶ US FDA DMF',
      description05: '▶ 21 CFR Part 1271',
      description06: '▶ MCB human derived virus test 완료',
      description07: '▶ Sterility, Endotoxin, Mycoplasma 등 FDA guideline 에 명시된 quality test 완료',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 7,
    name: 'RoosterVial Exosomes',
    dataname: 'p_07',
    price: 100,
    brand: 'Sartorius (RoosterBio)',
    image: 'image_roosterbio/RoosterVial Exosomes.jpg',
    datasheet:'',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Exosome'],
      cellline: ['MSC', 'Exosome'],
      mediatype: ['Liquid'],
      description01: '▶ MSC 유래 엑소좀',
      description02: '▶ Bone Marrow, Umbilical Cord 유래 MSC로부터 추출한 엑소좀',
      description03: '▶ Research grade',
      description04: ' ',
      description05: ' ',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 8,
    name: 'RoosterNourish-MSC',
    dataname: 'p_08',
    price: 100,
    brand: 'Sartorius (RoosterBio)',
    image: 'image_roosterbio/RoosterNourish-MSC.jpg',
    datasheet:'=datasheet/08. RBI_Product_Tech_Sheet_RoosterNourish_v3.2.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['MSC_Cell_Therapy'],
      cellline: ['MSC'],
      mediatype: ['Liquid'],
      description01: '▶ Serum free, Xeno free medium',
      description02: '▶ Research grade / Clinical grade',
      description03: '▶ US FDA DMF',
      description04: '▶ 다수의 임상 Reference 보유',
      description05: '▶ Protocol대로 이행 시, Media exchange 불필요',
      description06: '▶ CellBIND flask (Corning) 와 함께 사용 권장',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 9,
    name: 'RoosterCollect-EV',
    dataname: 'p_09',
    price: 100,
    brand: 'Sartorius (RoosterBio)',
    image: 'image_roosterbio/RoosterCollect-EV.jpg',
    datasheet:'datasheet/09.RBI_Product-Tech-Sheet-RoosterCollect-EV-v7.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Exosome'],
      cellline: ['MSC', 'HEK293', 'Exosome'],
      mediatype: ['Liquid'],
      description01: '▶ Chemically defined, Protein free, Xeno free',
      description02: '▶ 세포가 방출하는 Extracellular Vesicle 추출에 최적화 된 배지',
      description03: '▶ Low particulate medium: 엑소좀 유사 파티클을 제거하여 target exosome 만 획득하여 이후 정제 과정 수월',
      description04: '▶ 세포 배양 완료 후 워싱하여 배양배지를 제거한 후, RoosterCollect 로 배지교환하여 EV 추출',
      description05: '▶ Research grade/Clinical grade',
      description06: '▶ US FDA DMF',
      description07: '▶ [M02004] RoosterCollect-EV-CC',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 10,
    name: 'RoosterGEM',
    dataname: 'p_10',
    price: 100,
    brand: 'Sartorius (RoosterBio)',
    image: 'image_roosterbio/RoosterGEM.jpg',
    datasheet:'datasheet/10.RBI_Product-Tech-Sheet-RoosterGEM_v2.1.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['MSC', 'CAR_T', 'CAR_NK'],
      mediatype: ['Liquid'],
      description01: '▶ Chemically defined, Xeno free',
      description02: '▶ 세포에 유전자 도입 효율을 높이는 배지',
      description03: '▶ Viral/non-viral cell engineering에 모두 적용 가능',
      description04: '▶ MSC, T cell, NK cell에서 테스트 완료',
      description05: '▶ Research grade/Clinical grade',
      description06: '▶ [M40200] RoosterGEM',
      description07: '▶ [M03001] RoosterGEM-CC',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 11,
    name: 'RoosterReplenish',
    dataname: 'p_11',
    price: 100,
    brand: 'Sartorius (RoosterBio)',
    image: 'image_roosterbio/RoosterReplenish.jpg',
    datasheet:'datasheet/11.RBI_Product-Tech-Sheet-RoosterReplenish-v2.1.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['MSC'],
      mediatype: ['Liquid'],
      description01: '▶ Xeno free',
      description02: '▶ Protocol대로 이행 시, Media exchange 불필요',
      description03: '▶ Research grade/Clinical grade',
      description04: '▶ Bioreactor에서 RoosterNourish를 사용하여 세포 배양 시, feed medium으로 사용',
      description05: '▶ [S43001] prcRoosterReplenish-MSC-CC',
      description06: '▶ [SU-023] RoosterReplenish-MSC-XF',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

//Sartorius BI Media
  {
    id: 12,
    name: 'MSC Nutristem XF Medium',
    dataname: 'p_12',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/MSC-Nutristem-XF-PRF-Basal-Medium-500mL-Bottle-en-B.jpg',
    datasheet:'datasheet/12.MSC-NutriStem-Datasheet-en-B-Sartorius.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['MSC_Cell_Therapy'],
      cellline: ['MSC'],
      mediatype: ['Liquid'],
      description01: '▶ Serum-Free, Xeno-Free',
      description02: '▶ GMP grade',
      description03: '▶ For Research and Further Manufacturing',
      description04: '▶ US FDA DMF',
      description05: '▶ 임상시료 생산 Reference 보유',
      description06: '▶ PLTGold®와 함께 사용 권장',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 13,
    name: 'Nutristem hPSC XF Medium',
    dataname: 'p_13',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/NutriStem-hPSC-XF-Medium-500mL-Bottle-en-B.jpg',
    datasheet:'datasheet/13.NutriStem-hPSC-XF-Medium-Datasheet-en-B-Sartorius.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['iPS', 'ES', 'hPSC'],
      mediatype: ['Liquid'],
      description01: '▶ Serum-Free, Xeno-Free',
      description02: '▶ GMP grade',
      description03: '▶ For Research and Further Manufacturing',
      description04: '▶ US FDA DMF',
      description05: '▶ Suitable for reprogramming and expansion of hPSCs',
      description06: '▶ For feeder-dependent or feeder-free condition',
      description07: '▶ 임상시료 생산 Reference 보유',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 14,
    name: '4Cell Nutri-T GMP Medium',
    dataname: 'p_14',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/4Cell-Nutri-T-GMP-Medium-1L-Bottle-B-0002050-White-Sartorius.jpg',
    datasheet:'datashhe/14.4Cell-Nutri-T-Media_datasheet.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['PBMC', 'T_Cell', 'NK_Cell', 'CAR_T', 'CAR_NK', 'TIL'],
      mediatype: ['Liquid'],
      description01: '▶ Serum-Free, Xeno-Free',
      description02: '▶ GMP grade',
      description03: '▶ For Research and Further Manufacturing',
      description04: '▶ US FDA DMF',
      description05: '▶ Lymphocyte 기반 모든 면역세포 치료제 적용 가능 (PBMC, TIL, T, NK, CAR-T, CAR-NK 등)',
      description06: '▶ 건강한 기증자와 암환자 유래 세포 결과데이터 보유',
      description07: '▶ 임상시료 생산 Reference 보유',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 15,
    name: 'NutriFreez Cryopreservation Solution',
    dataname: 'p_15',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/NutriFreez-D10-Cryopreservation-Medium-without-Phenol-Red-500mL-Bottle-en-B.jpg',
    datasheet:'datasheet/15.NutriFreez D10_Datasheet.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['동결보존액(DMSO)'],
      cellline: ['Mammalian_Cell', 'Stem_Cell', 'Immune_Cell', 'Primary_Cell'],
      mediatype: ['Liquid'],
      description01: '▶ Chemically defined',
      description02: '▶ Serum-Free, Protein-Free',
      description03: '▶ Animal component free',
      description04: '▶ GMP grade',
      description05: '▶ For Research and Further Manufacturing',
      description06: '▶ US FDA DMF: D10 등록 완료, D5 등록 중',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 16,
    name: 'NutriStor Cold Storage Solution',
    dataname: 'p_16',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/NutriStor-Cold-Storage-Solution-500mL-Bottle-en-B.jpg',
    datasheet:'datasheet/16. NutriStor-Cold-Storage-Solution-Datasheet-en-B.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['냉장보존액'],
      cellline: ['Mammalian_Cell', 'Stem_Cell', 'Immune_Cell', 'Primary_Cell'],
      mediatype: ['Liquid'],
      description01: '▶ Chemically defined, Serum-Free, Protein-Free',
      description02: '▶ PBMC, MSC, T cell, CAR-T 등 다양한 세포에 적용 가능',
      description03: '▶ Animal component free',
      description04: '▶ GMP grade',
      description05: '▶ For Research and Further Manufacturing',
      description06: '▶ 세포의 단기 보존/이송 시 냉장(2–8 °C) 안정성 부여 > 높은 Cell viability, cell recovery 유지',
      description07: '▶ Post storage necrosis, apoptosis 방지',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 17,
    name: 'Recombinant Trypsin (EDTA) Solution',
    dataname: 'p_17',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/Recombinant-Trypsin-EDTA-Solution-500mL-Bottle-en-B.jpg',
    datasheet:'datasheet/17.Recombinant-Trypsin-Flyer-en-B-Sartorius_FG_210602.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Detachment'],
      cellline: ['Mammalian_Cell', 'Stem_Cell', 'Immune_Cell', 'Primary_Cell'],
      mediatype: ['Liquid'],
      description01: '▶ Defined, Animal component free',
      description02: '▶ Fungi derived recombinant trypsin',
      description03: '▶ GMP grade',
      description04: '▶ For Research and Further Manufacturing',
      description05: '▶ Easy to handle (상온 보관)',
      description06: '▶ Chymotrypsin free, Carboxypeptidase A free, Other protease contaminants free',
      description07: '▶ Serum containing, Serum free 배양 환경에 모두 사용 가능',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 18,
    name: 'Human Serum Albumin (HSA) Solution(10%, 20%)',
    dataname: 'p_18',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/Human Serum Albumin (HSA) Solution.jpg',
    datasheet:'datasheet/18.Human Serum Albumin 10%, 20%_Manual.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Stabilty'],
      cellline: ['Stem_Cell', 'Immune_Cell', 'Primary_Cell'],
      mediatype: ['Liquid'],
      description01: '▶ Xeno-Free',
      description02: '▶ GMP grade',
      description03: '▶ For Research and Further Manufacturing',
      description04: '▶ Compliant to EU licensed medicinal product',
      description05: '▶ Maintaining cell growth, expansion and cell membrane stability',
      description06: '▶ Human Serum Albumin 10% Sol.',
      description07: '▶ Human Serum Albumin 20% Sol.',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 19,
    name: 'EndoGo XF Medium',
    dataname: 'p_19',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/EndoGo-XF-Medium-500mL-Bottle-en-B.jpg',
    datasheet:'datasheet/19.EndoGo-XF-Culture-Media-Datasheet-en-B-Sartorius.pdf',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['Endothelial_Cell'],
      mediatype: [''],
      description01: '▶ Serum-Free, Xeno-Free',
      description02: '▶ GMP grade',
      description03: '▶ For Research and Further Manufacturing',
      description04: '▶ Long-term expansion of endothelial cells',
      description05: ' ',
      description06: ' ',
      description07: ' ',
      description08: ' ',
      description09: ' ',
    }
  },

  {
    id: 20,
    name: 'PLTGold Human Platelet Lysate',
    dataname: 'p_20',
    price: 100,
    brand: 'Sartorius(BI)',
    image: 'image_bi/PLTGoldGMP-GI.Family.jpg',
    datasheet:'datasheet/20.PLTGOLD_MillCreekProductSpecSheets_2022.pdf',
    download: 'PLTGOLD_MillCreekProductSpecSheets_2022.pdf',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Cell_Therapy'],
      cellline: ['Mammalian_Cell', 'Stem_Cell', 'Immune_Cell', 'Primary_Cell'],
      mediatype: ['Liquid'],
      description01: '▶ Cell therapy (FBS 대체제)',
      description02: '▶ Xeno-Free',
      description03: '▶ Research grade / GMP grade / GMP-GI (Gamma Irradiated)',
      description04: '▶ For Research and Further Manufacturing',
      description05: '▶ US FDA DMF (GMP grade 품목에 한함)',
      description06: '▶ FBS 대체제, 사람 혈소판 용해물',
      description07: '▶ Donor pool에서 추출하여 Lot-to-lot consistency 확보',
      description08: '▶ 소량 첨가(2~5%)에도 탁월한 세포 증식 효과',
      description09: '▶ 임상시료 생산 Reference 보유',
    }
  },

  {
    id: 21,
    name: 'Sartorius Albumedix',
    dataname: 'p_21',
    price: 100,
    brand: 'Sartorius (Alumedix)',
    image: 'image_albumedix/Albumedix-Recombumin-B-0003194.jpg',
    datasheet:'datasheet/21.recombumin-datasheet-en-b-sartorius-pdf-data',
    download: '',
    incharge: '01076400958',
    mailto : 'https://www.sartorius.co.kr/help/',
    nature: {
      manufacturer: 'Sartorius',
      application: ['Stabilty', 'Nutrient', 'Final_Formulation', 'Surface_Coating', 'Filter_Pretreatment'],
      cellline: ['Mammalian_Cell', 'Stem_Cell', 'Immune_Cell', 'Primary_Cell'],
      mediatype: ['Liquid'],
      description01: '▶ Defined, Animal component free',
      description02: '▶ Yeast (Saccharomyces cerevisiae) derived recombinant human albumin',
      description03: '▶ GMP grade (ICH Q7), USP-NF compliant',
      description04: '▶ For Research and Further Manufacturing',
      description05: '▶ DMF: US, Japan, (Canada, Australia, New Zealand and China – 괄호 안 국가는 Prime만 해당)',
      description06: '▶ Purity: 99.0%',
      description07: '▶ 용액 상태, 냉장 보관',
      description08: '▶ 유효기간: 5년',
      description09: '▶ 허가의약품의 Final formulation에 사용된 reference 보유 (4건)',
    }
  },
 
];

let specialist = [
  {
    id: 1,
    datname: "s_01",
    name: "김서윤 부장",
    ename: "April.Kim",
    email: "April.Kim@sartorius.co.kr",
    mobile: "010-1234-5678",
  },
  {
    id: 2,
    datname: "s_02",
    name: "장두재 과장",
    ename: "Doojae.Jang",
    email: "Doojae.jang@sartorius.co.kr",
    mobile: "010-1234-5678",
  },
  {
    id: 3,
    datname: "s_03",
    name: "손대우 과장",
    ename: "Robert.Son",
    email: "Robert.Son@sartorius.co.kr",
    mobile: "010-1234-5678",
  },
  {
    id: 4,
    datname: "s_04",
    name: "이윤서 대리",
    ename: "Samantha.Lee",
    email: "Samantha.Lee@sartorius.co.kr",
    mobile: "010-1234-5678",
  },
];

// =======================================================================ITEM LIST
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter) {
  count.innerText = productFilter.length;
  list.innerHTML = "";
  productFilter.forEach((item) => {
    let newItem = document.createElement("div"); //
    newItem.classList.add("item");

    // silverhyo div 내에 data-name=''을 삽입
    let newData = newItem;
    newData.dataset.name = item.dataname;

    // create image
    let newImage = new Image();
    newImage.src = item.image;
    newItem.appendChild(newImage);

    // create name product
    let newTitle = document.createElement("div");
    newTitle.classList.add("title");
    newTitle.innerText = item.name;
    newItem.appendChild(newTitle);

    //create brand
    let newBrand = document.createElement("div");
    newBrand.classList.add("brand");
    newBrand.innerText = item.brand;
    newItem.appendChild(newBrand);

    list.appendChild(newItem);
  });
}

// ======================================================================================

// ==============================================================================FILTER
filter.addEventListener("submit", function (event) {
  event.preventDefault();
  let valueFilter = event.target.elements;
  console.log(valueFilter);
  productFilter = listProducts.filter((item) => {
    // check manufacturer // item앞에 !가 없잖아 그래서 아래 것들과는 다른데 딱 한가지 중복 없어야 하는 경우 이걸 쓴 것 같다.
    // if (valueFilter.manufacturer.value != "") {
    //   if (item.nature.manufacturer != valueFilter.manufacturer.value) {
    //     return false;
    //   }
    //   console.log(valueFilter.manufacturer.value != "");
    //   console.log("안녕");
    //   console.log(valueFilter.manufacturer.value);
    // }

    // check application
    if (valueFilter.application.value != "") {
      if (!item.nature.application.includes(valueFilter.application.value)) {
        return false;
      }
    }
    // check cell line
    if (valueFilter.cellline.value != "") {
      if (!item.nature.cellline.includes(valueFilter.cellline.value)) {
        return false;
      }
    }

    // check media type
    if (valueFilter.mediatype.value != "") {
      if (!item.nature.mediatype.includes(valueFilter.mediatype.value)) {
        return false;
      }
    }

    // check name
    if (valueFilter.name.value != "") {
      if (!item.name.includes(valueFilter.name.value)) {
        return false;
      }
    }
    // check min price
    // if(valueFilter.minPrice.value != ''){
    //     if(item.price < valueFilter.minPrice.value){
    //         return false;
    //     }
    // }
    // check max price
    // if(valueFilter.maxPrice.value != ''){
    //     if(item.price > valueFilter.maxPrice.value){
    //         return false;
    //     }
    // }

    return true;
    console.log("이거야이거!");
  });
  showProduct(productFilter);
  makePopupWindowActive();
});
// =====================================================================================

// =====================================================================CREATE ELEMENT
makePopupWindow();
function makePopupWindow() {
  let previewCon = document.getElementById("previewcon");
  previewCon.innerHTML = "";
  productFilter.forEach((item) => {
    let newData00 = document.createElement("div");
    newData00.classList.add("previewbox");
    let newData01 = newData00;
    newData01.dataset.target = item.dataname;
    previewCon.appendChild(newData01);

    let newData02 = document.createElement("div");
    newData02.classList.add("preview");
    newData01.appendChild(newData02);

    let newImage = new Image();
    newImage.src = item.image;
    newData02.appendChild(newImage);

    let newCloseButton = document.createElement("div");
    newCloseButton.classList.add("closebutton");
    newCloseButton.innerHTML = "X";
    newData02.appendChild(newCloseButton);

    //Data-Sheet Download 버튼 만들기
    let newDatasheetbutton = document.createElement("div");
    newDatasheetbutton.classList.add("datasheetbutton");
    newData02.appendChild(newDatasheetbutton);

    // a Tag 만들기
    let newData12 = document.createElement("a");
    newData12.href = item.datasheet;
    // newData12.download = item.download;

    // 이미지 엘리먼트 생성
    let imageElement2 = document.createElement("img");
    imageElement2.src = "image/file-text.png"; // 이미지 파일 경로 지정
    imageElement2.alt = "데이터시트"; // 이미지 대체 텍스트
    imageElement2.style.width = "40px"; // 이미지 너비 조절 (필요에 따라 조절)
    imageElement2.style.height = "40px"; // 이미지 너비 조절 (필요에 따라 조절)
    imageElement2.style.display = "block"; // 블록 요소로 설정
    imageElement2.style.margin = "auto"; // 가로 가운데 정렬
    // imageElement2.style.position = "relative"; // 상대 위치 설정
    // imageElement2.style.top = "50%"; // 부모 요소 상단에서 세로 중앙으로 이동
    // imageElement2.style.transform = "translateY(-50%)"; // 세로 가운데 정렬
    imageElement2.style.filter = "invert(100%)";

    // 이미지를 <a> 엘리먼트에 추가
    newData12.appendChild(imageElement2);
    // newData12.innerHTML = "DataSheet";
    newDatasheetbutton.appendChild(newData12);

    //incharge 버튼 만들기
    let newIncharge = document.createElement("div");
    newIncharge.classList.add("incharge");
    newData02.appendChild(newIncharge);

    // a Tag 만들기 : 전화
    let newData13 = document.createElement("a");
    newData13.href = "tel:" + item.incharge;
    // newData13.innerHTML = "문의하기";

    // 이미지 엘리먼트 생성
    let imageElement = document.createElement("img");
    imageElement.src = "image/telephone.png"; // 이미지 파일 경로 지정
    imageElement.alt = "문의하기"; // 이미지 대체 텍스트
    imageElement.style.width = "40px"; // 이미지 너비 조절 (필요에 따라 조절)
    imageElement.style.height = "40px"; // 이미지 너비 조절 (필요에 따라 조절)
    imageElement.style.display = "block"; // 블록 요소로 설정
    imageElement.style.margin = "auto"; // 가로 가운데 정렬
    // imageElement.style.position = "relative"; // 상대 위치 설정
    // imageElement.style.top = "50%"; // 부모 요소 상단에서 세로 중앙으로 이동
    // imageElement.style.bottom = "0px";
    // imageElement.style.transform = "translateY(-50%)"; // 세로 가운데 정렬

    // 이미지를 <a> 엘리먼트에 추가
    newData13.appendChild(imageElement);
    newIncharge.appendChild(newData13);

    //mailto 버튼 만들기
    let newMailto = document.createElement("div");
    newMailto.classList.add("mailto");
    newData02.appendChild(newMailto);

    // a Tag 만들기 : 이메일
    let newData14 = document.createElement("a");
    newData14.href = item.mailto;
    // newData14.innerHTML = "메일";

    // 이미지 엘리먼트 생성
    let imageElement3 = document.createElement("img");
    imageElement3.src = "image/letter.png"; // 이미지 파일 경로 지정
    imageElement3.alt = "데이터시트"; // 이미지 대체 텍스트
    imageElement3.style.width = "40px"; // 이미지 너비 조절 (필요에 따라 조절)
    imageElement3.style.height = "40px"; // 이미지 너비 조절 (필요에 따라 조절)
    imageElement3.style.display = "block"; // 블록 요소로 설정
    imageElement3.style.margin = "auto"; // 가로 가운데 정렬
    // imageElement3.style.position = "relative"; // 상대 위치 설정
    // imageElement3.style.top = "50%"; // 부모 요소 상단에서 세로 중앙으로 이동
    // imageElement3.style.bottom = "0px";
    // imageElement3.style.transform = "translateY(-50%)"; // 세로 가운데 정렬

    // 이미지를 <a> 엘리먼트에 추가
    newData14.appendChild(imageElement3);
    // newData12.innerHTML = "DataSheet";
    newMailto.appendChild(newData14);

    let newData03 = document.createElement("br");
    newData01.appendChild(newData03);

    let newData04 = document.createElement("h3");
    newData04.classList.add("medianame");
    newData04.innerHTML = item.name;
    newData01.appendChild(newData04);

    let newData05 = document.createElement("div");
    newData05.classList.add("description");
    newData01.appendChild(newData05);

    let newData06 = document.createElement("ul");
    newData05.appendChild(newData06);

    let newData07 = document.createElement("li");
    newData07.innerHTML = item.nature.description01;
    newData06.appendChild(newData07);
    let newData08 = document.createElement("li");
    newData08.innerHTML = item.nature.description02;
    newData06.appendChild(newData08);
    let newData09 = document.createElement("li");
    newData09.innerHTML = item.nature.description03;
    newData06.appendChild(newData09);
    let newData10 = document.createElement("li");
    newData10.innerHTML = item.nature.description04;
    newData06.appendChild(newData10);
    let newData11 = document.createElement("li");
    newData11.innerHTML = item.nature.description05;
    newData06.appendChild(newData11);

    let newData15 = document.createElement("li");
    newData15.innerHTML = item.nature.description06;
    newData06.appendChild(newData15);
    let newData16 = document.createElement("li");
    newData16.innerHTML = item.nature.description07;
    newData06.appendChild(newData16);
  });
}
// ====================================================================================

// ========================================================================POPUP WINDOW
function makePopupWindowActive() {
  let previewContainer = document.getElementById("previewcon");
  let listItem = document.querySelectorAll("#list .item");
  let previewBox = document.querySelectorAll(".previewbox");

  listItem.forEach((item) => {
    item.onclick = () => {
      previewContainer.style.display = "flex";
      let name = item.getAttribute("data-name");
      previewBox.forEach((previewBox) => {
        let target = previewBox.getAttribute("data-target");
        if (name == target) {
          previewBox.classList.add("active");
        }
      });
    };
  });
}
makePopupWindowActive();

let previewContainer = document.getElementById("previewcon");
let listItem = document.querySelectorAll("#list .item");
let previewBox = document.querySelectorAll(".previewbox");
let closeButton = document.querySelectorAll(".closebutton");
closeButton.forEach((item) => {
  item.onclick = () => {
    previewContainer.style.display = "none";
    let previewBoxActive = document.querySelector(".previewbox.active");
    previewBoxActive.classList.remove("active");
  };
});
// =====================================================================================
