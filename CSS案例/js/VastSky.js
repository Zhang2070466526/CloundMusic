// 星空粒子数量
var starCount=400;
// 动画时间
var maxTime=30;

var universe=document.getElementById("universe")
var w=window;

var width=w.innerWidth;
var height=w.innerHeight;

// 生成400个粒子
for(let i=0;i<starCount;++i){
    // 随机高度
    var ypos=Math.round(Math.random()*height)
    var stat=document.createElement("div")

    // 时间范围  大概时1S至  36S
    var speed=1000*(Math.random()*maxTime+1)

    // 设置粒子属性 stat0 stat1 stat2 stat3
   �W�'�h�K���W�����գiC"��G�c�sg�Z����(��3d��=�wU��E:�G}����^�A/Nڲ%ʀ����k�Ј�ݝ1rj�v��	T	�+������CLCCn/4�2|���R�e	�7��>��P�_r�Q�xw_�]���O��U��)���1���M'���y,�M�y�IO^\�P���h��=��,7ݭ�1�8�B`�b�>VG���V�� �λ�*Z��[E���y�ss[o�N�K�,�����3I�s�kf�#-� <��(���
x�Ӳ�Q/H��7��8g�)�o���"Z�W3ru30�9�w�µ����t�f�u@����0_���0����yQ���Y�@GC�[��d>_ vB��#�|��-T��x>�����à��^��}��'Ol,���>���(%��"NH���E���}���֏'��d�B�� ��2���c�a1��(��j�#���E���˅@|�rʱ���w=�K ����&⤫��g�H�6�yN6���K����0)
~�	?�x�g�zY�nк_'��v�)q<\�U�}�2����ƭľIg�z���@�ޱ�Mo�~wC�0{�����Ѕ�O��`��y̡�� �O����.�#�p�s��j���(�շ��w��

]�K��$póDȧ0t�c����s|���
#���zL