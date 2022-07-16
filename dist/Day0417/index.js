"use strict";
// console.time("PageLoadTime");
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// // const input = `1
// // 3
// // 5
// // 11
// // 13
// // 17
// // 19
// // 23
// // 29
// // 31
// // 41
// // 43
// // 47
// // 53
// // 59
// // 61
// // 67
// // 71
// // 73
// // 79
// // 83
// // 89
// // 97
// // 101
// // 103
// // 107
// // 109
// // 113`;
// const input = `1
// 2
// 3
// 4
// 5
// 7
// 8
// 9
// 10
// 11`;
// const data: string[] = input.split("\n");
// const dataNumbers: number[] = data.map((n) => Number(n));
// const thirdOfNumbers: number =
//     dataNumbers.reduce((a: number, b: number): number => a + b) / 3;
// console.log(data);
// console.log(dataNumbers);
// console.log(thirdOfNumbers);
// const getComboSumRange = (set: number[], target: number): any => {
//     let finish: number[][] = [];
//     let working: number[][] = [[]];
//     while (working.length) {
//         let nextWork: number[][] = [];
//         for (let i = 0; i < working.length; i++) {
//             for (let j = 0; j < set.length; j++) {
//                 let subset: number[] = working[i].concat([set[j]]);
//                 let sum: number = subset.reduce((a, b) => a + b, 0);
//                 if (sum <= target) {
//                     (sum === target ? finish : nextWork).push(subset);
//                 }
//             }
//             // if (working.length > 10000) break;
//         }
//         working = nextWork;
//     }
//     return finish;
// };
// const packages: number[][] = getComboSumRange(
//     dataNumbers.slice(1),
//     thirdOfNumbers
// );
// console.log(packages);
// const answer = packages.map((pack: number[]) =>
//     pack.reduce((a: number, b: number): any => a * b)
// );
// console.log(answer);
// console.log(Math.min(...answer));
// // // const canConstruct = (
// // //     targetStr: string,
// // //     wordBank: string[],
// // //     memo: { [index: string]: boolean } = {}
// // // ): boolean => {
// // //     if (targetStr in memo) return memo[targetStr];
// // //     if (targetStr === "") return true;
// // //     for (let word of wordBank) {
// // //         if (targetStr.indexOf(word) === 0) {
// // //             const suffix: string = targetStr.slice(word.length);
// // //             if (canConstruct(suffix, wordBank, memo) === true) {
// // //                 memo[targetStr] = true;
// // //                 return true;
// // //             }
// // //         }
// // //     }
// // //     memo[targetStr] = false;
// // //     return false;
// // // };
// // // // console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// // // // console.log(
// // // //     canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
// // // //         "e",
// // // //         "ee",
// // // //         "eee",
// // // //         "eeee",
// // // //         "eeeee",
// // // //         "eeeeee",
// // // //     ])
// // // // );
// // // const input = `kvvfl kvvfl olud wjqsqa olud frc
// // // slhm rdfm yxb rsobyt rdfm
// // // pib wzfr xyoakcu zoapeze rtdxt rikc jyeps wdyo hawr xyoakcu hawr
// // // ismtq qwoi kzt ktgzoc gnxblp dzfayil ftfx asscba ionxi dzfayil qwoi
// // // dzuhys kfekxe nvdhdtj hzusdy xzhehgc dhtvdnj oxwlvef
// // // gxg qahl aaipx tkmckn hcsuhy jsudcmy kcefhpn kiasaj tkmckn
// // // roan kqnztj edc zpjwb
// // // yzc roc qrygby rsvts nyijgwr xnpqz
// // // jqgj hhgtw tmychia whkm vvxoq tfbzpe ska ldjmvmo
// // // nyeeg omn geyen ngyee rcjt rjuxh
// // // qpq udci tnp fdfk kffd eyzvmg ufppf wfuodj toamfn tkze jzsb
// // // rrcgxyp rbufd tfjmok vpyhej hcnz ftkojm
// // // jnmomfc jnmomfc bkluz izn ovvm flsch bkluz
// // // odisl hzwv hiasrhi hez ihihsra qpbmi ltwjj iknkwxf nbdtq gbo
// // // gjtszl gjtszl fruo fruo
// // // rdapv gaik cqboix sxnizhh uxmpali jdd usqnz advrp dze
// // // flooz flooz qad tcrq yze bnoijff qpqu vup hyagwll
// // // lnazok dze foi tqwjsk hpx qcql euzpj mwfrk
// // // ilb fmviby ivybmf gtx xtg
// // // rpauuu timere gyg wcolt ireetm safi
// // // croe szwmq bbhd lciird vhcci pdax
// // // hnc ykswt qqqmei goe bri wmyai hnc qpgqc pberqf bzs
// // // hsnrb wdvh iezzrq iezzrq rdbmpta iezzrq kemnptg alkjnp wymmz
// // // ngw don ddvyds nlhkoa aaf gptumum ugtpmmu
// // // vmccke qbpag kvf kvf tgrfghb kvf bhpd sglgx
// // // obomgk bkcgo yso ttft vbw ckl wjgk
// // // fli qvw zhin dfpgfjb udsin nihz ovr tiewo
// // // tgmzmph hauzieo jmg tdbtl lvfr qpaayq qapaqy ausioeu jun piygx
// // // jkp guqrnx asdqmxf vmfvtqb tloqgyo ioix gajowri tmek ilc puhipb
// // // uycn zxqm znft ayal znacus kvcyd ekv qqfpnh
// // // fqghur xtbtdd ztjrylr bpuikb ziyk
// // // rvakn uqbl ozitpdh uqbl dsej xehj
// // // laxp haz jyd xnkrb ijldth woy xapl iqgg alpx gnupa ukptmmh
// // // dyiy dyiy ihb qcyxr
// // // wbwkd hdwu zvgkn hdwu wjc sakwhn zxujdo npllzp uyr uyr
// // // fxczpmn cininu akcxs ggslxr riyxe ojisxe
// // // ppbch sampq dnct afikor dnct edsqy pnzyzmc afikor
// // // jnvygtn hijqjxl vsd jnvygtn nqcqv zns odq gkboxrv kolnq wrvd
// // // mroq mroq flsbu flsbu
// // // fyshor xvpaunj qmktlo xoce wkiyfu ukcl srndc ugwylwm ozcwdw mtqcste kpokr
// // // cfh cxjvx cfh cfh uewshh
// // // bpspbap bpspbap fquj mxmn bwls iirhvuk dmpkyt exrn mxmn
// // // tvyvzk ezszod ntxr xtnr och
// // // knfxhy kbnyl knfxhy xhkssx lxru uprh nkxpbx oodolxr tpvyf
// // // nblmysu iwoffs upgof tyagwf aan vovji ajk ywzq oyfi sfulz
// // // aushzkm lcaeki mkuzsah ynxvte rsntd refk pcm
// // // mgguob gobmug dzenpty gmogbu
// // // yvq eepof rgnree nerger fpb stfrln ernger
// // // hrgkbl mzwvswk rsrsbk ieru holco pajvvn ztgsr qkyp fyeg owpcmoj
// // // fowda gmsqdca yugj mcrroxv mqcbojd fjnqfji qdfsc jqs
// // // qnc rvjfz vvxk sjd xrma ucdjvq sbw zydyt dfzww
// // // ocajazv cozaajv tqunkla udwf ecnnmbz lsakqg bki njnda zsdu ccfqw rxpc
// // // qqm qdfya qxyx qmq qfday uqnfttt
// // // rnbirb iapor qet iapor hxkhz dfvzig pedl ybyb
// // // mkgamxg xkniv meb hbzmxjn dhbj zhbxjmn hdjb
// // // ilteux pyutyfx mau lrr bacak
// // // sjjonmn dbbbgs crxyuu jztstgd ezb uiabyaa
// // // tra fle ufzlvf nnaw kec hiwnnlj tei wld iyt syk hjdczb
// // // qmd jtlud dgh dbanock fzp dsjgqru wwvo jwvxwgv xlemfij jcacd
// // // rpkx oxesil snazcgx fly miiyc ikmtmp oefyyn egbw
// // // ypfpeu wldnyd acchppb yqwcaw wldnyd turbz megci nbgxq xkc ypfpeu
// // // iqqv iqqv neui iqqv
// // // ypsxm icqyup zyetrwq nbisrv
// // // viommi toszx dpueq eyy cunjou ffcjc jaeez djefra pxvkj liudlig yye
// // // fhnacbg jghchh ghjhhc iue hwqmo
// // // vbjw lpn cizba ltnsfpz tzoweml irewlc uzckhpd mszal obd
// // // yeos utxkft hflxkfe fxczge qpgigkc ksgr vuumql vhlvv
// // // xzmkv xzmkv krecdi klpem jsbu nwcmik emfzxf cjmpgnj
// // // vtkjo pmiv zou gxo qdiyxsf hwyinjk jhkgf rjq
// // // dyuoc ywiyvch irfgl ywiyvch fxb fxb
// // // tuz onhr syu rqya abkaf bcfx mbknex juwoor zmksl
// // // oheg spjorx ksdy vwtq fxz phvtazk tcze lrxg
// // // hew lbup botaj ltr jpd
// // // dxgc tzinkej gnz hxvvub adsqmc dxgc asgpp rqbdcra goy pmamdua bhiacva
// // // xqv ygb kihxqz vyv pjcny vmyvsdv cgsi nfyx
// // // tqga ssshrw ndq qlbvwh huyd pxbgj qbxk dkkbf jxy chsobw pph
// // // hxl iwph iwph xnr otifm ljhre
// // // zlgvpd kapxpoc dve rklk ogh hgnp rbrmc zzkz hhmcx aklmo
// // // sar gfor nkf hek nkf aql shc aql
// // // dtcrw kfjzcjx qyhi bldson whwdayo mqtgt xhqzp ttqmg
// // // omspdml isze jdl nvwo qrkm wztfg ssfgyh dryj jhp unsmty
// // // jxt cszylng ifht ixtuna azoi xutqlv jtx tjx
// // // usgm azuayp fgkby ezpyq jqwl ezofj
// // // tnhvil nrvg moyrpqs sldx qymoff megflxh pyhqwms xmdw
// // // zomy zcquwnv lzx bvcna yods mjp dgsez
// // // blklyf xokd gpit tiysj yrwfhm tofx
// // // dtig vhdp omuj vhpd
// // // fogwxim qvdwig emdiv jvhl euwbzkg xvxb hwmqo ujdmlp epmykj
// // // sjxll sjxll pedvgb sjxll
// // // drvay gtzhgtx yrt okz nqf
// // // haxfazn pvkovwb pgu tgshw mxcjf pbe nwoymzc mxcjf pbe hydwy jradcr
// // // prjsloa ahylvj okbsj qbdcdjt pmfo pagyoeg vkmhjzt khzmjvt opfm xfrji gyjqyel
// // // lzypt jdbtrad ogr jdbtrad heink
// // // rcoucuq gdxewa rcoucuq whlw zhhm rcoucuq azaqohe mzyli rdvaf
// // // yuag ebcf yuag nsotg qqzuxr jfmao vyucw wmoye
// // // qwvk xemm hgqrr wyxkpp tojndm xlvzypw jus bgnu bgnu nklfwhs
// // // daqi knenmku ccm xkiuy vkexsbc kvvdagx umopitw yaocnx yoakqql mllmsp
// // // mrxgl gywit mfopia ncnsvw vdxek axuiot rsejua nei prndudz mnu
// // // egqn gaa qgen urs mix zbn rhn
// // // ewharq aihy udkdaob kgrdd kgrdd kugbjtj fcef llqb pduxaq wcexmm
// // // dwtiw nelq hppad algxgf gcc upou akm efnb mxmhrud
// // // yxqaa ups okbhgt iet qns tqn rnjqxgp
// // // npmhdm cgds ldexvr typi jyivoqk zkgq vfyxu xgfo
// // // dkwnmr umm dkwnmr okpjw wqx jpztebl eqsib dkwnmr
// // // dxbild wpbup evscivq dxbild dxbild geqp ojfbpl jshvqej
// // // cxdntxs csfocjd pyy tuhws teb boyloz xfw scxh pxhonky
// // // lteucke xrgwy hszgzu hnyrcvb
// // // pfgsgwg dxzh fworek qbstod
// // // usemcrf psczxu gcjtr brls
// // // hjol efxczux bqdn gvrnpey yyoqse gbam ndzyj lbwb bhzn unsezg
// // // bapw xifz blupk qqdk bofvqpp wnbuwyt rnwocu lzwgtt zucag pov
// // // xkre lqvd juf lqvd xio xyg xyg
// // // tzdao ztheib aymcf aorg iyawrch hetcxa iyawrch czdymc ccv
// // // ucgl azlppu jvxqlj pest
// // // dvwlw fuuy mnhmm okrp ualnqlm uyuznba fzyejk yaq crl ctprp
// // // odfq knox mkbcku pxucmuf lpjpol phl
// // // ixongh hfs ruorbd auy qyssl kykwcix aytsm rlj aytsm duq segpqhk
// // // izufsk wedpzh podjkor eamo vqvev ifnz podjkor xrnuqe
// // // twyfps bmdbgtu qye qkwjms
// // // wlav htym vhsnu cocphsj mdsuq vhsnu jflgmrp
// // // opajag itwjhfu purnnvk opajag
// // // hpkopqp vnj aialpt lzrkzfs nwucez nwuezc
// // // mcx hzcjxq zbxr dsx tpknx fva
// // // rlvgm xrejsvn ghawxb efyos xty wdzdgh olahbtn rga efyos vhtm nsr
// // // cni mbab qtgeiow ulttn rckc kmiaju jvbq emyvpew cdlxldn ulttn brhkprx
// // // eykpffp rapik qki fhjgdyu tome ehjuy bibjk htxd vexvag
// // // wrk dpxt gwkuiov gbkif ike gbkif pcd wpj toywyf qzsa aol
// // // yqwzh uujn ujun ujnu
// // // srs ralwxrz yxvvmgp sjhbhk waasid cqtxoxf whcladv jkmaq khjbsh dlavcwh
// // // mdvsjh xaj etvxlsy fxgiy rgjesel rlegesj ptriz ebdyhkp kugxm dxv egljser
// // // lhehwrs mqevb ygmv gri izop qgb ivm
// // // loqqam alojlwg hgen hbyw qlwpun loqqam worgnwk kope
// // // phozre todsknr todsknr ibj mvllsar
// // // wuripy ruwlfbh wukbkey qhq iishw tvtvci xawvxc vxacwx hsiwi ogq
// // // xryq vxwupqa zhqex aquxpwv bnvxrba dtbxki
// // // yvvwh zvsm vqskhp vqskhp ggqqlw bpn wbuv
// // // kqz tdy goqwge ygn jgd
// // // szjjhdk zkpoo nxexz ebicc
// // // wzuemcj oyd qupulju iaakzmt vzkvz
// // // nppahov umm wpzev wxkgfxd owgekp bhhb bbhh dgviiw kdfgxwx wryb
// // // bnc rhes lmbuhhy kwbefga bnc rtxnvz bnc
// // // ani mggxf mcoixh zdd nai hbhzl mes bdpqr
// // // mjn uinoty jjegvze bjgqg yhqsxbt coj obylb hddude xqi rhfbhha alood
// // // cbjzj drmihy tfkrhsd nuhav hihzx bvblqpl tdd szmp gjgfv box
// // // uumhdxd cmwgyf vepr rwqdkj exwk
// // // hwvr ydvw bqefu kghes gvbhp awms iqsqes khgse
// // // mrey jqfw fwvzhps komj dayvs fbui zmtd cofn mrey
// // // dsjds fdpx irjj usndok qcctsvf fgk wvg txwxcl dxs llp zyilwtq
// // // xmkelgk fdukc cye legkxkm wwly
// // // enlny eynln cccku brkz dpof mwfoxcd yftmnqh wpebvyc
// // // ggdn jnysl dsacffw ukj hdae cmzxku
// // // uqhm gcachmn kxndfrl htmfis jfnajz fiqiypr kekho kekho ndcw ckrndub dejfna
// // // keazuq ertql rauwl keazuq obmh rauwl ksrotm
// // // jppp poigqhv repfsje grjk xwkyuh pkx ayzcj hoxzv
// // // yhjw pcuyad icie icie icie hwcsuy wcd yihjh jnrxs
// // // gaug ivvx ceb xujonak hbtfkeb ttciml cctoz
// // // dggyyi dggyyi gqlyumf yasu fwdfa cbb nncn verhq
// // // rhgcw gpcyct kiuhbg kiuhbg gpcyct jlmleo nhumm
// // // wulxxu jyjek hclcp ogob viex wiqcupq
// // // tthu nxgzpid kcnj mss ukapgkp nnc bxjocv qwxs oejwsif aywqtu brahkb
// // // dtde bgvb smu vbbg zhlu
// // // lyo nwjjmep ldbok wgxhto wwuh qfgjknk wnsl
// // // lleyr onha hkwulbm jfg
// // // bybjwd uoxvbh mvj iqfpnxs bybjwd zqtszp wvc lbazjr zkzenja cev
// // // rbuyyr divtslq yuqmyt ajyveb smxsjb nlk tzqhq ims fewg wpjhr gqh
// // // kpewfd beq klilis klisli eeezut
// // // euqh hueq ldoo crqurv lvrwh tmaewp oodl
// // // bqi lzrf jyhvxfh bqi jyhvxfh nbztd lwpdn cuzi
// // // srjylou phavzjd wost uxkaq byh sluryoj
// // // ihrdk bcegkpq nygrs qbcq wyjg dvzme pgzhjl vibg kvv
// // // ijsx iedemek ktlz gtga tbal lbki gtga
// // // vmiaxn kefig kefig vngxz
// // // vrdmfvi qts vlvhq vlvhq dihmq
// // // cfz dyrz zlw qnt vok fwvahg skshbqf hbwozdc ntana jdb uflp
// // // rimbj bxemw sfps krtk umta vnk ewmbx nrlje ymrtqrz mxewb kjxunbt
// // // egnuti ozat eltl ngueti
// // // qtcwoxq rmaf qtcwoxq qtcwoxq
// // // zws gcoa pydruw qsrk lrkybdf ugr wkrxoj nyvf vitwn
// // // tmr hhd dojid zwrj bhsim righ keqlep flzunou
// // // lwoquvy acjowxk tqudk oenvioh nyavyl
// // // rgh dfhgyke iff cpxhuz hui koe iff hui dmukrei
// // // bjiumig lcbmbgh vleipx sfawua rnf
// // // gftfh qwb tfdroe xbno qhgofm vqfoe mux
// // // ljdrr gyfggai iun nju xrucbis mhrcrh fukr obvuqc whlalfe xrucbis nju
// // // nxjmjr egqwg arllu xqaahri lzc ivt uhsti
// // // sqiepba rcmts kvesv nvp
// // // tiksw tiksw rjni gbhvzm ctbq zuqfyvz
// // // ibsnm kfka aoqigwo sqouih rxz
// // // jmymq lxio adtmk umyu sxvzquq bporqnb heol fow
// // // mepa eckq rqviawv dkqoei ifmngpp jiava rtklseu
// // // yuycd jiufjci yuycd uowg yuycd udq izkicbr csxobh
// // // nwu tfsjavb rruoxbn oepcov elxf rruoxbn rruoxbn azglwth jcjm ksqiqpv
// // // dthfwip zqnwa zqnwa zqnwa
// // // gso wruece ufl crgnlxv vllsm dpyfm wpa ctxko
// // // wvpze seodz lpq lpq pmtp wsxs ffppx
// // // yfxquj phvjn rtwieq rtwieq kgxztyu vbjvkc prqqd lyzmdo ojbrt ojbrt qiqjz
// // // esaezr rpggiy jey kbzrhu uthus osr xxaiijd qfxlf auhzbx gkigoqw
// // // yfhcj uvgck cds gjhhrg cmempgj yfhcj cjb
// // // yxi voxvtuw unwg jqqm
// // // igvjr ljz rus sru gbjtjt qfeg ztu zjl
// // // leof ocxns hbkoysh hbkoysh leof
// // // hab lyxmf yhh qeks fwhfxki xmbcak okqjii nfgzyg bhtfgdj lpmjn
// // // mgognh tad herere lvwnzx ixwqs zphmuuc etdjz kczsf
// // // mtej rlolsnn zbl uykek dpkan gmz etxtgj
// // // mihuieo emjgbp jgks mihuieo iexrfw mjdnr bvp mcuzea xkbusvi
// // // jvqpj bwt jvqpj bwt gxr
// // // qpnd fpt tpor bibbpcg hmvguez wqc afl ckviua gpi
// // // dntmcg jglm sxtnu sxtnu sxtnu
// // // fzkbptw cbfwo ozvwov wbv gcdd izqo ovwzov lolewo xikqpw
// // // nkxyxzd kpn datf fki werq mwidqx oiibor zizcjph
// // // xvgyxym zor ijoy lvwsf fjuara idvvq rreit mqyyy ctio tzwqqhj rnpee
// // // maqkfpk maqkfpk xukg sfdmnlg xjopvr xjopvr irf
// // // liujcd vnlkouy dxkwc gto vhjvtw
// // // swhqhj cas aupsd swhqhj cas bvbooii jquck dtdm
// // // igh iqicicf ghi pcxt srcrjx gmf gyscphv
// // // drplj drplj wopgpnk wytag wopgpnk
// // // zexe ilcqoh qiefb txkuv lirfzv
// // // ovvpn ovvpn uqeurqx uwzn hgmucj ovvpn sjxulms
// // // rox silka irhsvym kutus otasof tdneav pcagds
// // // mkja omu tyshbfq onp trxs lxa tftbv bnpl djhnc zdqfs muo
// // // tjj rmmqas cbbkxs qio pikk ykyew gxlxt nhsyl ykyew
// // // frcprg njrz oaxcmhc qben pedm ecvtga nzxwpb ior gaklot dpem
// // // zyt kncau spoe qlchg sqys wkpbng yflju qlchg vkve bzadbpa
// // // qtq pkaicl qtq mfkfqvr dnleiq brrjxsx uoyxh pkaicl yvmlug
// // // firwy imtlp ywl qfa dqrbazz ztzb pcsbwhn zesmlag
// // // ivey ivey mtvc mtvc
// // // lhize acwf moa cdeoazd voktshy qmvqq jvmuvk ljfmq tsanygc
// // // xreiqkc aawrovl pofcsg xreiqkc xreiqkc
// // // cjbzvn ozds iniqu sdoz gqmki bablvll krs vjzcbn
// // // izsod htkeqz entxn qtns prpcwu omfnmoy
// // // kwfb tctzda aztctd tadtcz gyt wunbcub ydiwdin xxk
// // // epnl ijcp giq ltfk zjcabve zfksmz epnl giq xxxbsom
// // // ulyukpa mdjsbn dydko uhkdt qms aaaj hustlwu
// // // zlsbu ohx jcwovf egf zlvpqgx qhejm wrywdmw
// // // uhxqrzr mmu kjxcalj unuohiq rri yzngnb ikvlxry mfiym qbksdx
// // // khqciz som yklmm jceb khqciz jspy jceb
// // // ncwggv njvi nqox krtsn lnm
// // // bgtqme xaxcoq qbtgme obqual vorfk baoqul lgrb
// // // jli tsbb nlxjc pkwzmz dlxrj hmho gzguko ilj iyaasm
// // // wlmw grkumg dynwtyo emxhhqr huluk slpqu uhqcmd absmr ufirmwr
// // // pbs pcammxv dplfr tzvmav nccyy blvyq ffhnz bccutq
// // // hgge ghge vxmvz hqxgjdg zab guo gheg
// // // ylj bucoyoq udndc wpgyrbx ueh udndc gxdsdh hdoz wwgqlg
// // // cjdeh gttyqe kdkm ltzd lfeozse quvjq mnwhokm kdv oojxm nxt
// // // mfkzus knqxt saxkqww njx zumsfk sbmcyad cpt agvbuv
// // // tukn vyco yobvsn bzgnn klrnzy kea thzk pxpwq ryfff nxzm
// // // ylbm lxlz lybm lzxl
// // // wgtxoij zad slgsi cvnxfg iomswwl vmx
// // // hkm yinhnkj kmh kwkw kayknck chur styjif yknakck
// // // rtfwhkq rtfwhkq zsf zsf
// // // sldq zlntr ueegiw kajivqc ozcbm ceft snvugom pdyc elppeed nnqrp prwwf
// // // lhk xjonc muc tudag tsafx mmivb dvrjbp qgrew
// // // hnzer fbgqp aazta aazta lxaz lmgv aazta
// // // victgxu victgxu mlpd ummrnbx cazjgnw isxcyp efy zfa cyusj
// // // gyojxo onzq gyojxo uxufp awi ilhl wefwfxr gcjlt tmliynw uxufp pdcnxah
// // // wjwachn xkuhfbp oky oky ybaeqkr rbuix yreoaw wepmye brvon aasb
// // // kiidorw vxtxiqx wtqvbrv efdth isel qbom vcssyc vxtxiqx wtqvbrv riafzsw mqzsj
// // // eurpjd vkhdamt tmfx czeoot hiz ykz lmixzq tfur jhzr
// // // ipuftpj qbll sqkkdw fwncmiv bri oeeh lehd ioh wag
// // // suima nanngc imrmc krq atxdo woy atxdo akev qlr aezco qlr
// // // cfc efwbzck ozkmcxv moczkvx ccf
// // // bnekky iakrk sask uwgnjp iyi rynev bdnas ldh kass
// // // sicmw vvjbvv cap nsumc xgvrlm wsoo uoqdu psykckm
// // // ugg mtr wnzhmmh tjxc ehwnji lwhu mdsckk yvmk enubrqo
// // // grb oxmxz ohu ytetedv ssx apzlppg fdkamm sxofc jdt ynmu wyejok
// // // umoep rbyqm eqfk twqnog cptbbi dragna ngqs ffb cexxnc rbyqm
// // // utizi ormkel wvwur bdx ecelqbv xiccama aag glfvmj
// // // znb rsuqoa uxo svc
// // // obs lbifa cffi catpd
// // // qkxwian ajlzjz wewduzp bbyv qmt fsr qgiu epinp ghmf
// // // hatg bfgmb aght ghat
// // // kuq inp dun cknbun wmwsu drlmmg kyxc bdl
// // // bddybth swdbf jhi fva qpobio bjwm wjaztp jywi
// // // mgckz vhveu zkemhp zdf xtiqqew mlx wazgd
// // // umbjq pya lvvxf jeavij rhrxvew bwjqgpr piz
// // // xaycpwo vjcuc qksc yuixhni sfbfb dydyaq gdfvb tggg xidphvf bpjdrl goskxym
// // // agxfoip gguif wvo agxfoip ntkbaw fbyggy ooft zxih
// // // nzvsu ffwq uxvfbl qrql olhmhom qhdltg ymwz krtndtx olhmhom nfsv krtndtx
// // // qdp jqk ustz xjripzv mnk grnodk pjwdsj uug zqxjqj
// // // mufrcox zunisfs ocvcge acamm xua vor bsde kxr vor kxr orccxx
// // // ncycbp anvcxay bmm wndmeaw oso knmk mmb wamenwd kmkv ppdd
// // // motdcn xzagzwu vuzt utffrn yuqxzrh uvzt ujttq
// // // tauoqy coiy ybesz tauoqy wpmr trquyne ahxbj jzhems dsdy
// // // aczq ypw pgmzz srfn quatjgf
// // // cih ypapk bfxvr euvhkk gugru auhqui
// // // vyf pssgfvy dnhvbfl xpacme dnhvbfl mzdv iynq hcqu
// // // lbzvbu hhxiq hdfyiiz iyzihfd xhqih uzdqyxr
// // // iapbdll vdr cprmrkk vdr dfjqse mlry flpqk vdr
// // // grrfkq xcpxd grrfkq dxc bjpr prvwh swoc swoc
// // // bopo chvwuhf qhd ieesl xey ieesl fnjcbe
// // // kic fyq hsucnu agwyl pzzmd hqksh psw
// // // mxf uau iti lcoz lpg zbu ocre wqlocmh mxf nidqj lcoz
// // // bypmix ptzxgmf xmtzgpf hrvzzq
// // // lbfw zwusma lbfw tuyyy
// // // lrf uej unswvh obgsb npbl zajr kenea uej qnyjcu wzufim qpzkgya
// // // qcrxj llyu kligt hlm ehwtbx dda lgsvhdt xewfcv uikn
// // // nfzjx izqdbq mfbxs imiuc yqxb xlmvix izqdbq eflqfq wku omgtuu izqdbq
// // // lasdwg hiy btzt eefd eyoep icn nnmhg otml rek luixac nyzgn
// // // vekteds utsuxdx utsuxdx vekteds
// // // feyov qrij zbebwg ijrq seplram wttkwm zewbgb kzuhuh
// // // dmkgtv wohgqo ddtqmv zatahx mym hqowog tkmvdg
// // // vhha wjrmuyx kqh vyyrj xzchbi ejsdq orlxg vyyrj dlrc
// // // yetngqn zdtuqox hkarjei fqpsgh eaqwbg zsssog ghb gddqqzr hbg
// // // obldb zsrhz zxp uxphnev mwnbc pfjft fms xwslk vjm fxy
// // // nfij dbfykv ttq gyjgac igxuyqi gtiioqx ilhdex dbfykv uyp bdiwya gqf
// // // pffzruz vogfosh dcs wje
// // // pohhf fhpoh oon yyz
// // // xxuam afwm qxl lnt syyr bwxhhf sozauq shlhfmz kwnn milav ochq
// // // wefcqrt gejw cwerqtf fttf gjew
// // // jfsvnmr osca epwtle pgfif sxom
// // // exlfzmq nakp rgdnx rrcvth vhrrct aajjdrt ryyg dsozd jdqlqj pakn iruv
// // // rmcvo txszcs xxhyxz hbsozk wshkocf rmcvo rcbnt
// // // kitz yjgney yvkymef nauj hmllsgl kyhm kqr pzsu rcf pzsu qpte
// // // cdinpx bfur mkj naz ihkheyr nohhoe
// // // ylris xeqcgup wap bbfih tgfoj
// // // ina gnlnm zyeqhij cudfuf ipufae bvkdzni aat teqsg cudfuf bjokrbl teqsg
// // // aedx edax dnfwq qndwf
// // // rdngdy jde wvgkhto bdvngf mdup eskuvg ezli opibo mppoc mdup zrasc
// // // qcnc iaw grjfsxe gnf gnf
// // // zbjm snznt zelswrk gkhlnx dqxqn qqxnd dmro
// // // zisecvx ztezof uzbq otnrtj qsjzkwm ewvcp rlir bfghlq tgapdr qxmr
// // // ipnqj opjf vabyoe wkwnd
// // // wyf mfqxnrf apm snarf jqu aaghx pwecbv lvghayg
// // // acncv jmmbwlg oiphlm ifuo cvt
// // // pvmb egansnd zmh gcuzzci rrxpslv ubith
// // // uoleptg xbouzn xbmg cfh cpn wpqi xbouzn xtxis sxzpns
// // // rilybri kurbpq vfmjpck tjyogho hfyxad svfofx lfbbhxj khaerfs iqr
// // // seaebgz wlmtkre qguv qguv wlmtkre
// // // sgo edkxya zdqgwtt gxu nibuu rairqoq mzxli dci qsv
// // // tsol mdhzqr rmaqnru ggvcq arbwkn hlkcnj ljkcuof
// // // mmliphp ocup puoc eijjv
// // // gmajqpb ijki ijki kvz
// // // pmqss unhlpcj dlkll nuhlcjp expe tlurzmv nsy vlumtzr tgseozl
// // // gkvaoni hsba hsba viuedv phyoclp fdq phyoclp febld nqfs
// // // rxvdtw abn pntv qrqfzz slsvv abn lrxix mnu npot
// // // ghlfjp woy xwkbmv bkahpkj jve cncvk jvdype fwgvoju yrkwjp gwfvln mvkv
// // // kmluh mie bby fwer chsinb ojglqr nqk mie
// // // yzmiu igkgca ybnsqja jpfejtp yjddy xsosxfi ingx qwuhb emrkwpx idqjmmm
// // // btrllw mphm dkvo ewdl dchcul yah btrllw kmqi mtvgk wtb
// // // hxsgard yuikc lykt tdee adprp gpougod klnzk mzsmlb
// // // hdn znblw ifoblur bwzln dbv
// // // smofpbs vjuyiro llk lfzesga tybu tybu
// // // gffnpug xaup iqiyz fjkpnkz drrk fwyxw lwzfskz gslwpmv vjxylva tbkyo nib
// // // evydmb nhwuiiu fkerq nkgbuyy uclrs ydjgglh xhotwbm riirgzt
// // // bsub eavbt uvd dpzwyt rhn khrbptt xszckc djnfxju axofhat powmso nvdffrv
// // // xtuykl fjz mbikc xpnx hmey fjz fjz
// // // rkls nwdcsyx rkls rkls
// // // tygml untequ ybdfumz nqffbq uipc sove hfnqj
// // // ytecew vven koqn royynd qsn ksl qsn sdw
// // // hknlw qwho whoq oqwh
// // // lzmmtqu qvhyeo cnofuj utpwkjz gnirz yhhu aodbnd
// // // zsr axw kwtzcv tydzo kwtzcv lkxsm
// // // rbjtqe nihifd gvdxd bpxzy rxteky vgcgllv vbbua anygiup rqo
// // // dpd wblfwp wblfwp wblfwp ygahc tqjbaq
// // // gsw gsw pacgj xmrcz zmxhmch xmrcz
// // // pdq rhe xqmq lgpkhg fyffrot ovnqh wle
// // // tbjavke ypzzrj jizx gdxoh icjsat otfh fmygumv
// // // snch nxlgjgp jeyn sxoqfj jtage jtage iuice
// // // rtb coefuj grwg grwg rtb krhqnma vfhgbr
// // // vhegtl btorwxg szcev kbvkx itsk nlzpbed
// // // hiukrf ilzkm yllhh xsgwkdp zyy kjbv
// // // rfcg tdorci zcj wzftlv rfcg rfcg
// // // lgbc lzizat vsno pau nvv vsno bbr lzizat qhtb gwp
// // // sfwnio tcugjk bsfsz ykyfwg ibkap fsrvy mygk kzunawx zyhyh
// // // mpavlh qps bylh lttjkz rqabgk vewb bwev tlzkjt gzrbxga ktmso prpkj
// // // gpf ims ynh ffrs vpa iemp gofh cgbauje
// // // secys qks mcnfhwh drog kqs pajy zoltkw lfihnb myb ioxptu
// // // ytq nrta ouk ajqblf yuwwcd zdy blyoxbw dakk nvgi bzrhzaa
// // // nkoych sufiia xkdvw crtldee zycl qblab egqhr qblab
// // // nllno muxaf vds qjnitmw zkpj wskyhft kmqct xamuzpw qcai cdjtbt kaxv
// // // qzdytpe osr fuw osr qzdytpe whperd rydwdcl knoa
// // // zkdznhd peh duoygr zamrgl irnvj otpe pltpq jdkecg
// // // byzgw rece iigdug ehif tpgje
// // // ccnn foqdran gbctca tefdjxh ntcr rjciii xip xlss crl wvvhzqm twyohf
// // // dqyii milqqc qjgkojp qjgkojp ryde
// // // tdkyj tbrcud tsba vqtmb cjwxnf
// // // hqhmq wemvrce nagig pwnw nagig epg nagig vlsi
// // // tqgvw luoplw hccti npjm rytdruq cylrsun rytdruq vjsbjl rytdruq ppti
// // // itgt tuwc itgt rvp itgt tigns eipl ksmru
// // // pdw wdhtkn nbdbpn wff zhuuipg rvemv qxr
// // // qgkwdq cjilayh ymeks mrpuzai dwgs stfstgz ucvqhb yout oiq
// // // vpxik ypfr qytimvu qms oxbmw ppyfx
// // // fwwidn gdhd pyuexk snsz iwndfw
// // // lfcb sllxjna lfcb hpzahfg mmvgaa svny jhuzd
// // // unyg gicmzd fwc spkciy toyq wjupckd vzzx iuqgka ytqycb pxsufj
// // // goj tnrcml eyizngj txa xrkiw zvu igduz
// // // wek xrrlkna clyof rrlnxak
// // // cjm rmyuku vjom gtf
// // // buk cfae awstd dywgqp hxo wcxvf laihqw xdqfes wdbh qceh uzlwj
// // // sudguo dxwplto rlebdh bkamu dxwplto
// // // crwkyxm yuz kjtdhom crwkyxm
// // // trhc sduorxr aizfryh rsudxor gbyc
// // // pczkyl bptp qnn nxmpwsx udrg hhlb rubtrmx twzodlp xygnht
// // // jmqct cden yfajtkz fevcw sxonbxz sxonbxz qkzkm hhngr fbv
// // // sdsnm mwvicr wypfi cty ndbowr woiz mrauwzd qlno mwvicr
// // // vteyo fng lvr lxytn txpj milg
// // // wjx ahtmgo cgwcaj kaxae fhlvlqf
// // // ezj eetqhzu upwda iiefwlk vyvby
// // // imalvy yeghqe jwcu mvrod cwju
// // // bxnmsa yhfu npsdar tsbri hfuy sirbt oofxmy
// // // fkndt elbjtn vepqtxt elvpf fpelv bzkgag qttexpv prblwb
// // // rmq iqs yvprnyy iezqrzm wlqsrr
// // // yviovq lekxghj oey qwhzj lxknxw qiyovv ksnt jptz
// // // tyrg cifxt hugqf tyrg ffuiv jmax qyw fozfosq ffuiv
// // // nmg rsl jpzazd qbtlf yxqtsj czwmdfd bamge lbjdof uqy jssc
// // // cbx boozjip pwgvzlq rjz kxy kxy hszacok fvsq jhnir cnsba gafz
// // // sbcuxb wfur nnnfqjj fdwg huhe sbcuxb
// // // icwk qelbxs uevp qped zsnhh wpuok wddxsln ftnzupr ruxol cgxjb jbhh
// // // izcp htykj xxmndoq amnspe htykj
// // // vverol oixwlny vqd tvfzu henc gnyrwr
// // // ytxio etytsx choynep zqapo hfjit
// // // lkvgr oyzfa taiqr jok djatvy ckif tmdw oyzfa zroy
// // // jlgpyp kkqysg oqjki hjohoug hbhta muilz zft
// // // sumfyu wftcu bwwdcy lezimwa qwvxv zwh mqyv bmfot aii torcol rnt
// // // tpdj xrw ccsbnh fhptv fwkxjfm dmqaokd bjci
// // // zxi vmf vmf dpyg
// // // sfzxysw lcms bkojtv bkojtv
// // // opywo qll ipkitr mtwp tudrr svhyp huz bxsdpn xomfy
// // // gkod luo qrosbp orbd rpsjzyd rlh gdok tze
// // // nusiuq nusiuq zeys ahufexc
// // // veno jntg avtmtdn qojxru zegdcql odfcetz pgehau
// // // uqun vigjm ykac ozlelj danmji bibugox
// // // rpuozh ajwru rbvuevv uhzsq
// // // iawoe tyb aewio ymf byt inijv ctu fcys micsgzl pbby alt
// // // gktyxp ris mqpfm bkqsfl nrg idbbcxg jhcf
// // // qibt invvv qibt luitx rnm eby hrfbmwl wnap sgkzvb qlwc hrfbmwl
// // // jwkv qecsjbw lycgldd wjvk tjcp dycldgl pzrvr zrlcf kji
// // // nzsrmiq nmhse ilivrk kqv
// // // besmyzi imkgpt iekbjax abxeijk uvzs wwv
// // // jdocl uki ltswp tjkljc ymce iuepze qygqxzs tei lkry
// // // hhyfy gvzd mqksxlq czn afe mesnag eep frwgekg mqksxlq phpy
// // // ehg connnza ekt ddgokw
// // // mpbsoms uzhzl xevww ztt uzhzl
// // // lftybr firc awsud dsxdkk ltf ipjv dtx lcymth
// // // vkcpb gxtxq yioeq fexj xxgqt
// // // srvca fslnnvf nfmkpvt egw wemumq jie vznf dzsjw cukf kcvyir
// // // yxjkl lyjkx jyxlk kgc xtz
// // // tpoe xzov csp leleoqo noyre tdhf cyib sjgtdx raehdw nmcxp
// // // qvt uhznqe bpvos vtq ddlebtd tqv
// // // xlw utsxs gpia rvlvnts elkxr dddihy tnrslvv ibf wlx bxg
// // // cwqnnrt rkkqyf dye yde fzl pthanj
// // // boc rqjenpp xjqte jteqx pvoofc pidqe ruoucy gvnro ognrv
// // // qhalb gnazwc fhl iuti
// // // clnbjfo nnfs nnfs heymvr oarew oarew nxu
// // // lwtrotg hiaxwj ymzbly nvhzjhj zlsaheg nvhzjhj ymzbly
// // // rrvi tsjp tsjp tsjp killji
// // // rpx hiclj cmwq ibhj nfd
// // // pvwymn iebkd xmpw vuhhkap ksw zigzy mzzyyxy rmuh iwwhea cglfq
// // // rlwelgy sffml jin qsdzro xlsty mgqzuu etxjuo emzd jgnoyq tkjuy vfvb
// // // tkctdj hhkuc viskmy obw
// // // zvjkuj akeky ikj jqd hfhzbwe bkc
// // // btev nrdo hcyiuph stf qharfg vpmel mpfz nvs ytgbbc
// // // ieepn ndueuw svmdr tcvumw mceyrn mrjwhyl tbdj mgrgvz
// // // uxrs ckyi xpmqm czzrkl cjp
// // // nlliwd wrqkrkz yjmng nlliwd zirde hcjjn wco ysf mgl
// // // dxti lcahe ommare izlwf ramsfb nzgfvo ijvm fwymrdu bndq
// // // isxy jpvuzu tdduyhw dixp cfa fkzbteg ytoi kepk ysf yqcpi
// // // qmeprfj soqo ncgeor cqsuuj grzy wogxy vyblnbg slvtry vdols kka
// // // ltykfp gtzl olrp gxend vapee deq
// // // emywfbn dbfiut rkt wvwe dbfiut bwffhea yuzcxv gogpicp wvwe
// // // vqvmrp ofbk dlfabd jwllzxk obx vqpwjj umvng tqwis fstxy fstxy
// // // miha zgvyux rmraszo xwf
// // // kjaagk btm kjaagk wkewjrg kjaagk
// // // lbmli aizs omrdr gzktnx asiz ptanzpa xlo ljre ckyb wob
// // // svz dlk rijagg avxmg fkzwhk uro gegm
// // // dzplum temdw jqnm tvxcww bmg tftttpp deuw comxey xfimzjx caluczi nqn
// // // uwvhxa ztkd nlsdyt vihl julkwwv uzch dwakhs
// // // wkhuihh ycrc cxff vzcfhpp uegfd gaok kcnvz lhzogq lwa tyrypvu
// // // idp zmrrzp zmrrzp nktp xsnx rjsxn
// // // eybrnib ivgntl vaxsbpi eybrnib
// // // nzvnq xvbfa pbhwwh ylju runvsj imlx vztesn
// // // nfdohd nfdohd gtevnky pivjyct ihvd fzcsrq lko fmqk
// // // kwpkks ecikxu bcxswlt qvrxm sbcqmh
// // // kdjrmj piuh kdjrmj vnaf gyedkg vptxgm xezssxx zsg qjzpo zsg
// // // oqo sley aqx qmpqb fgmylbj egd zivj kepxizv kuakyn lunbnd
// // // hmcf hmcf xlhgc hmcf cdlm buofnx
// // // onjcj yluonz kzmk phqo phqo phqo
// // // ohaafy efl bnkkjww wwjnyoj dxeaig ywnjjwo slk hrbebw ohlyju elf
// // // msohiqz aunk njki bfktdgi htmyrj mgx
// // // numlzrl rmnlulz glb ltt fhbajz gqxpu
// // // gko hco oai ryq xwy sdqosft spjkiu cxfhg ycwpglh noy rah
// // // btzpjem brpk vqr atxu rhlh rqv jmg fvyus
// // // phmxxgj ejx xje qtk hsb kqt npwj gqt
// // // hujyjp nwmsd ant zipuya lrkahww uwqal vzlo qmbo twkjkse ufivi
// // // zfbnyz fwvh xrnrw usn zin daq iwjzj
// // // yykyg iwypfy hehqnl cjvk cevdrec
// // // gui muuto wsta glqmx gfo rdmbv mxwz gffzt eejpw gion
// // // lpng nduid iqbpu nduid knrqd
// // // xwxn oefpckv gjaua ugaaj gjuaa
// // // qxk aeql trqdmqc crzlinj crzlinj trqdmqc rijcne ewyf
// // // rfv qmbe fvr bmeq
// // // upqyfw lowzq wpen upqyfw gfskbil sljuzh wpen
// // // bdcara qyhx rtaez qyq gbyr
// // // evzls qxtxq clzd svbgqi zxlzgss vtrre fko eebo qjyl
// // // zaapeo kpwhz tygknau nyd pch trp xqe
// // // ypzcafg rnqmbh qtteg sncu ssojhhm zonfym thir xmgheb wqj gpjg ssojhhm
// // // wvcwyn xrf muozyya lasdp xpjgu kpqv zkiihiv ifje cbdlavg xbied hfnaa
// // // qqqb rettz rycukl ihpkhh
// // // dnxzxqv znb znb fbxj azxtezb xvxa
// // // peqkd xlzqkov esgnw ucku hrwpfxd xtd vnig vlmfp ajte qswr kqoj
// // // dpwy oavzkk dwyp ehij upqxgii pydw
// // // amfc hfv xmqa nqvn cal rqmcq oej amqx cla ntxj
// // // hqhhe qkbhwli wmhlcq xaczs peywuo
// // // vcr xfv xfv kymo qpszwzo xfv
// // // nmrbur tswo xbo ljlrzo bmhpgc pev zovkznz lok wbbhtkk
// // // tojj lxqgr rhjavrm ndsdup gdbjwaq cqpnl wfaxivl rfry ryfr udspnd
// // // beffod sknlph amb feobdf
// // // mldgn jxovw yuawcvz kzgzwht rxqhzev fsdnvu vluuo eycoh cugf qjugo
// // // tlnd qcxj ker fdir cgkpo nrqhyq raef uqadf iahy rxx
// // // mhvisju lhmdbs tcxied xeidtc ujry cditex gvqpqm
// // // cgc jazrp crgnna uvuokl uvuokl uoiwl sknmc sknmc
// // // rvbu czwpdit vmlihg spz lfaxxev zslfuto oog dvoksub`;
// // // const validPassphrases: string[] = input.split("\n");
// // // const passphrasesWords: string[][] = validPassphrases.map((line) => {
// // //     return line.split(" ");
// // // });
// // // passphrasesWords.forEach((line) => {
// // //     line.forEach((word, index) => {
// // //         line.forEach((compareWord, compareIndex) => {
// // //             if (word === compareWord && index !== compareIndex)
// // //                 line.splice(0, line.length, "invalid");
// // //             if (
// // //                 String([...word].sort()) === String([...compareWord].sort()) &&
// // //                 index !== compareIndex
// // //             ) {
// // //                 line.splice(0, line.length, "invalid");
// // //             }
// // //         });
// // //     });
// // // });
// // // const answer = passphrasesWords.filter((x) => String(x) !== "invalid");
// // // console.log(answer);
// // class LinkedListNode {
// //     data;
// //     next: any;
// //     constructor(data: any) {
// //         this.data = data;
// //         this.next = null;
// //     }
// // }
// // class LinkedList {
// //     head;
// //     constructor(head: any = null) {
// //         this.head = head;
// //     }
// //     size() {
// //         let count = 0;
// //         let node = this.head;
// //         while (node) {
// //             count++;
// //             node = node.next;
// //         }
// //         return count;
// //     }
// //     clear() {
// //         this.head = null;
// //     }
// //     getLast() {
// //         let lastNode = this.head;
// //         if (lastNode) {
// //             while (lastNode.next) {
// //                 lastNode = lastNode.next;
// //             }
// //         }
// //         return lastNode;
// //     }
// //     getFirst() {
// //         return this.head;
// //     }
// //     reverse() {
// //         let node = this.head;
// //         let previous, temp;
// //         while (node) {
// //             temp = node.next;
// //             node.next = previous;
// //             previous = node;
// //             node = temp;
// //         }
// //         return previous;
// //     }
// // }
// // let ll1: any = new LinkedListNode(3);
// // let ll2: any = new LinkedListNode(5);
// // let ll3: any = new LinkedListNode(8);
// // ll1.next = ll2;
// // ll2.next = ll3;
// // let list: any = new LinkedList(ll1);
// // // console.log(list);
// // // console.log(list.reverse());
// // // console.log(list.reverse());
// // const binaryConverter = (decimal: number, result: string): any => {
// //     if (decimal === 0) return result;
// //     result = `${decimal % 2}${result}`;
// //     return binaryConverter(Math.floor(decimal / 2), result);
// // };
// // // console.log(binaryConverter(123196579, ""));
// // const mergeSort = (arr: any): any => {
// //     // console.log(arr);
// //     if (arr.length < 2) {
// //         return arr;
// //     }
// //     const middleIndex = Math.floor(arr.length / 2);
// //     const leftArr = arr.slice(0, middleIndex);
// //     const rightArr = arr.slice(middleIndex);
// //     // console.log({ leftArr, rightArr });
// //     return merge(mergeSort(leftArr), mergeSort(rightArr));
// // };
// // const merge = (leftArr: any, rightArr: any): any => {
// //     let resultArr = [];
// //     let leftIndex = 0;
// //     let rightIndex = 0;
// //     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
// //         if (leftArr[leftIndex] < rightArr[rightIndex]) {
// //             resultArr.push(leftArr[leftIndex++]);
// //         } else {
// //             resultArr.push(rightArr[rightIndex++]);
// //         }
// //     }
// //     while (leftIndex < leftArr.length) resultArr.push(leftArr[leftIndex++]);
// //     while (rightIndex < rightArr.length) resultArr.push(rightArr[rightIndex++]);
// //     console.log({ resultArr, leftArr, rightArr, leftIndex, rightIndex });
// //     return resultArr;
// // };
// // // let arr = [1, 2, 3, 5, 4];
// // // arr = mergeSort(arr);
// // // console.log(mergeSort([1, 2, 3, 5, 4]));
// // // let arr = Array(1024)
// // //     .fill(0)
// // //     .map((a, b) => b);
// // // let start = 0;
// // // let end = arr.length - 1;
// // // let target = 134;
// // const binarySearch = (arr: any, start: any, end: any, target: any): any => {
// //     console.log(arr.slice(start, end));
// //     if (start > end) return false;
// //     let midIndex = Math.floor((start + end) / 2);
// //     if (arr[midIndex] === target) return true;
// //     if (arr[midIndex] > target)
// //         return binarySearch(arr, start, midIndex - 1, target);
// //     else return binarySearch(arr, midIndex + 1, end, target);
// // };
// // // console.log(binarySearch(arr, start, end, target));
// // // console.log(arr);
// // // const data = 1024;
// // // let size = Math.ceil(Math.sqrt(data));
// // // let center = Math.ceil((size - 1) / 2);
// // // console.log(Math.max(0, center - 1 + Math.abs(center - (data % size))));
// // // const input = 5;
// // // let turnCounter = 0;
// // // let currentStepSize = 1;
// // // let numberOfSteps = 1;
// // // let gridSize = 5;
// // // let gridCenter = 2;
// // // let currentStepX = gridCenter;
// // // let currentStepY = gridCenter;
// // // let up = false;
// // // let down = false;
// // // let left = false;
// // // let right = true;
// // // let grid = Array(gridSize)
// // //     .fill(0)
// // //     .map(() => Array(gridSize).fill(0));
// // // grid[gridCenter][gridCenter] = numberOfSteps;
// // // while (true) {
// // //     if (right) currentStepX += 1;
// // //     if (up) currentStepY -= 1;
// // //     if (left) currentStepX -= 1;
// // //     if (down) currentStepY += 1;
// // //     numberOfSteps++;
// // //     grid[currentStepY][currentStepX] = numberOfSteps;
// // //     if (currentStepSize % numberOfSteps === 0) {
// // //         right = false;
// // //         up = true;
// // //         turnCounter++;
// // //         if (turnCounter % 2 === 0) {
// // //             currentStepSize++;
// // //         }
// // //     }
// // //     console.log(grid);
// // //     if (turnCounter > 5) break;
// // // }
// // // const spiralMemory = (input: number): number => {
// // //     if (input === 1) return 0;
// // //     let steps: number = 0;
// // //     for (let i = 0; input > i; i += 2) steps++;
// // //     steps += spiralMemory(input - 1);
// // //     return steps;
// // // };
// // // console.log(spiralMemory(4));
// // const fib = (n: number, memo: any = {}): number => {
// //     console.log(memo);
// //     if (n in memo) return memo[n];
// //     if (n <= 2) return 1;
// //     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// //     return memo[n];
// // };
// // // console.log(fib(50));
// // const gridTraveler = (m: number, n: number, memo: any = {}): number => {
// //     console.log(memo);
// //     const key = `${m},${n}`;
// //     if (key in memo) return memo[key];
// //     if (m === 1 && n === 1) return 1;
// //     if (m === 0 || n === 0) return 0;
// //     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
// //     return memo[key];
// // };
// // // console.log(gridTraveler(3, 3));
// // const canSum = (n: number, arr: number[], memo: any = {}): any => {
// //     console.log(memo);
// //     if (n in memo) return memo[n];
// //     if (n === 0) return true;
// //     if (n < 0) return false;
// //     for (let numb of arr) {
// //         const r = n - numb;
// //         if (canSum(r, arr, memo) === true) {
// //             memo[n] = true;
// //             return true;
// //         }
// //     }
// //     memo[n] = false;
// //     return false;
// // };
// // // console.log(canSum(300, [7, 14]));
// // const howSum = (
// //     n: number,
// //     arr: number[],
// //     memo: { [index: string]: number[] | null } = {}
// // ): number[] | null => {
// //     console.log(memo);
// //     if (n in memo) return memo[n];
// //     if (n === 0) return [];
// //     if (n < 0) return null;
// //     for (let numb of arr) {
// //         const r: number = n - numb;
// //         const result: number[] | null = howSum(r, arr, memo);
// //         if (result !== null) {
// //             memo[n] = [...result, numb];
// //             return memo[n];
// //         }
// //     }
// //     memo[n] = null;
// //     return memo[n];
// // };
// // // console.log(howSum(7, [2, 3]));
// // // console.log(howSum(300, [7, 14]));
// // const bestSum = (
// //     targetSum: number,
// //     numbers: number[],
// //     memo: { [index: number]: number[] | null } = {}
// // ): number[] | null => {
// //     console.log(memo);
// //     if (targetSum in memo) return memo[targetSum];
// //     if (targetSum === 0) return [];
// //     if (targetSum < 0) return null;
// //     let shortestCombination: number[] | null = null;
// //     for (let num of numbers) {
// //         const remainder: number = targetSum - num;
// //         const remainderCombination: number[] | null = bestSum(
// //             remainder,
// //             numbers,
// //             memo
// //         );
// //         if (remainderCombination !== null) {
// //             const combination: number[] = [...remainderCombination, num];
// //             if (
// //                 shortestCombination === null ||
// //                 combination.length < shortestCombination.length
// //             ) {
// //                 shortestCombination = combination;
// //             }
// //         }
// //     }
// //     memo[targetSum] = shortestCombination;
// //     return memo[targetSum];
// // };
// // // console.log(bestSum(7, [5, 3, 4, 7]));
// // // console.log(bestSum(100, [1, 2, 5, 25]));
// // const countConstruct = (
// //     targetStr: string,
// //     wordBank: string[],
// //     memo: { [index: string]: number } = {}
// // ): number => {
// //     console.log(memo);
// //     if (targetStr in memo) return memo[targetStr];
// //     if (targetStr === "") return 1;
// //     let totalCount = 0;
// //     for (let word of wordBank) {
// //         if (targetStr.indexOf(word) === 0) {
// //             const numberOfWaysToConstruct = countConstruct(
// //                 targetStr.slice(word.length),
// //                 wordBank,
// //                 memo
// //             );
// //             totalCount += numberOfWaysToConstruct;
// //         }
// //     }
// //     memo[targetStr] = totalCount;
// //     return totalCount;
// // };
// // // console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// // // console.log(
// // //     countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
// // //         "e",
// // //         "ee",
// // //         "eee",
// // //         "eeee",
// // //         "eeeee",
// // //         "eeeeee",
// // //         "f",
// // //     ])
// // // );
// // const allConstruct = (
// //     target: string,
// //     wordBank: string[],
// //     memo: { [index: string]: string[][] } = {}
// // ): string[][] => {
// //     if (target in memo) return memo[target];
// //     if (target === "") return [[]];
// //     const result = [];
// //     for (let word of wordBank) {
// //         if (target.indexOf(word) === 0) {
// //             const suffix: string = target.slice(word.length);
// //             const suffixWays: string[][] = allConstruct(suffix, wordBank, memo);
// //             const targetWays: string[][] = suffixWays.map((way: string[]) => [
// //                 word,
// //                 ...way,
// //             ]);
// //             result.push(...targetWays);
// //         }
// //     }
// //     memo[target] = result;
// //     return result;
// // };
// // // console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// // // console.log(
// // //     allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", [
// // //         "aa",
// // //         "aaa",
// // //         "aaaa",
// // //         "aaaaa",
// // //     ])
// // // );
// // // const mainFunction = (): void => {
// // //     class Player {
// // //         health = 50;
// // //         armor = 0;
// // //         mana = 500;
// // //         totalMana = 0;
// // //     }
// // //     class Boss {
// // //         health = 58;
// // //         damage = 9;
// // //     }
// // //     const magicMissle = {
// // //         name: "magic missle",
// // //         manaCost: 53,
// // //         damage: 4,
// // //     };
// // //     const drain = {
// // //         name: "drain",
// // //         manaCost: 73,
// // //         damage: 2,
// // //         heal: 2,
// // //     };
// // //     let shield = {
// // //         name: "shield",
// // //         manaCost: 113,
// // //         tempHealth: 7,
// // //         turns: 6,
// // //         used: false,
// // //     };
// // //     let posion = {
// // //         name: "posion",
// // //         manaCost: 173,
// // //         damage: 3,
// // //         turns: 6,
// // //         used: false,
// // //     };
// // //     let recharge = {
// // //         name: "recharge",
// // //         manaCost: 229,
// // //         mana: 101,
// // //         turns: 5,
// // //         used: false,
// // //     };
// // //     const getSpell = () => {
// // //         const spells = [magicMissle, drain, shield, posion, recharge];
// // //         return spells[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
// // //     };
// // //     const castSpell = (player: any, boss: any, spell: any) => {
// // //         if (player.mana - spell.manaCost <= 0) {
// // //             // console.log(`Player cannot cast spell: ${spell.name}`);
// // //             return false;
// // //         } else {
// // //             if (
// // //                 spell === magicMissle &&
// // //                 player.mana - magicMissle.manaCost >= 0
// // //             ) {
// // //                 // console.log(
// // //                 //     `Player casts Magic Missile, dealing ${magicMissle.damage} damage.`
// // //                 // );
// // //                 player.mana -= magicMissle.manaCost;
// // //                 boss.health -= magicMissle.damage;
// // //                 player.totalMana += magicMissle.manaCost;
// // //                 return true;
// // //             }
// // //             if (spell === drain && player.mana - drain.manaCost >= 0) {
// // //                 // console.log(
// // //                 //     `Player casts Drain, dealing ${drain.damage} damage, and healing ${drain.heal} hit points.`
// // //                 // );
// // //                 player.mana -= drain.manaCost;
// // //                 boss.health -= drain.damage;
// // //                 player.health += drain.heal;
// // //                 player.totalMana += drain.manaCost;
// // //                 return true;
// // //             }
// // //             if (
// // //                 spell === shield &&
// // //                 player.mana - shield.manaCost >= 0 &&
// // //                 !shield.used
// // //             ) {
// // //                 // console.log(`Player casts shield.`);
// // //                 shield.used = true;
// // //                 player.mana -= shield.manaCost;
// // //                 player.totalMana += shield.manaCost;
// // //                 return true;
// // //             } else if (spell === shield && shield.used) {
// // //                 return false;
// // //             }
// // //             if (
// // //                 spell === posion &&
// // //                 player.mana - posion.manaCost >= 0 &&
// // //                 !posion.used
// // //             ) {
// // //                 // console.log(`Player casts Poison.`);
// // //                 posion.used = true;
// // //                 player.mana -= posion.manaCost;
// // //                 player.totalMana += posion.manaCost;
// // //                 return true;
// // //             } else if (spell === posion && posion.used) {
// // //                 return false;
// // //             }
// // //             if (
// // //                 spell === recharge &&
// // //                 player.mana - recharge.manaCost >= 0 &&
// // //                 !recharge.used
// // //             ) {
// // //                 // console.log(`Player casts recharge.`);
// // //                 recharge.used = true;
// // //                 player.mana -= recharge.manaCost;
// // //                 player.totalMana += recharge.manaCost;
// // //                 return true;
// // //             } else if (spell === recharge && recharge.used) {
// // //                 return false;
// // //             }
// // //             return false;
// // //         }
// // //     };
// // //     const activeSpell = (player: any, boss: any) => {
// // //         if (shield.used) {
// // //             shield.turns--;
// // //             // console.log(`Shield's timer is now ${shield.turns}.`);
// // //             player.armor = shield.tempHealth;
// // //             if (shield.turns <= 0) {
// // //                 shield.used = false;
// // //                 player.armor = 0;
// // //                 shield.turns = 6;
// // //             }
// // //         }
// // //         if (posion.used) {
// // //             posion.turns--;
// // //             // console.log(
// // //             //     `Poison deals ${posion.damage} damage; its timer is now ${posion.turns}.`
// // //             // );
// // //             boss.health -= posion.damage;
// // //             if (posion.turns <= 0) {
// // //                 posion.used = false;
// // //                 posion.turns = 6;
// // //             }
// // //         }
// // //         if (recharge.used) {
// // //             recharge.turns--;
// // //             // console.log(
// // //             //     `Recharge provides ${recharge.mana} mana; its timer is now ${recharge.turns}.`
// // //             // );
// // //             player.mana += recharge.mana;
// // //             if (recharge.turns <= 0) {
// // //                 recharge.used = false;
// // //                 recharge.turns = 5;
// // //             }
// // //         }
// // //     };
// // //     const battle = (player: any, boss: any) => {
// // //         let battle = true;
// // //         let castSuccessful = false;
// // //         let counter = 0;
// // //         let turn = 0;
// // //         while (battle) {
// // //             // console.log("%c-- Player turn --", "color:blue");
// // //             // console.log(
// // //             //     `- Player has ${player.health} hit points, ${player.armor} armor, ${player.mana} mana`
// // //             // );
// // //             // console.log(`- Boss has ${boss.health} hit points`);
// // //             activeSpell(player, boss);
// // //             while (!castSuccessful) {
// // //                 castSuccessful = castSpell(player, boss, getSpell());
// // //                 if (castSuccessful) break;
// // //                 counter++;
// // //                 if (counter > 10) break;
// // //             }
// // //             counter = 0;
// // //             castSuccessful = false;
// // //             if (boss.health <= 0) {
// // //                 battle = false;
// // //                 // console.log("This kills the boss, and the player wins.");
// // //             } else {
// // //                 // console.log("%c-- Boss turn --", "color:red");
// // //                 // console.log(
// // //                 //     `- Player has ${player.health} hit points, ${player.armor} armor, ${player.mana} mana`
// // //                 // );
// // //                 // console.log(`- Boss has ${boss.health} hit points`);
// // //                 activeSpell(player, boss);
// // //                 if (boss.health <= 0) {
// // //                     battle = false;
// // //                     // console.log("This kills the boss, and the player wins.");
// // //                 } else {
// // //                     // console.log(
// // //                     //     `Boss attacks for ${boss.damage - player.armor} damage.`
// // //                     // );
// // //                     player.health -= boss.damage - player.armor;
// // //                     if (player.health <= 0 || boss.health <= 0) {
// // //                         battle = false;
// // //                         // if (boss.health <= 0)
// // //                         //     console.log(
// // //                         //         "This kills the boss, and the player wins."
// // //                         //     );
// // //                         // if (player.health <= 0)
// // //                         //     console.log(
// // //                         //         "This kills the player, and the boss wins."
// // //                         //     );
// // //                     }
// // //                 }
// // //             }
// // //             turn++;
// // //         }
// // //     };
// // //     const answers = (): number => {
// // //         let player = new Player();
// // //         let boss = new Boss();
// // //         shield.used = false;
// // //         shield.turns = 6;
// // //         posion.used = false;
// // //         posion.turns = 6;
// // //         recharge.used = false;
// // //         recharge.turns = 5;
// // //         battle(player, boss);
// // //         // console.log(player.totalMana);
// // //         if (player.health >= 0 && boss.health <= 0) return player.totalMana;
// // //         else return 0;
// // //     };
// // //     let answer: number[] = [];
// // //     while (answer.length < 1000000) {
// // //         answer.push(answers());
// // //     }
// // //     console.log(Math.min(...answer.filter((x) => x !== 0)));
// // // };
// // // mainFunction();
// console.timeEnd("PageLoadTime");
