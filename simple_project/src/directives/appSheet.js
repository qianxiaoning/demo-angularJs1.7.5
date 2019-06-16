import '@/components/sheet/sheet.less'
import sheet from '@/components/sheet/sheet.html'
appSheet.$inject = [];

export default function appSheet(){
    return{
        restrict:'A',
        replace:true,
        scope:{
            list:'=',
            visible:'=',
            select:'&'
        },
        template:sheet
    }
}
