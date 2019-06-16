import '@/components/foot/foot.less'
import foot from '@/components/foot/foot.html'
appFoot.$inject = [];

export default function appFoot(){
    return{
        restrict:'A',
        replace:true,
        template:foot
    }
}
