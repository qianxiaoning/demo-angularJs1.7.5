import company from '@/components/company/company.html'
appCompany.$inject = [];

export default function appCompany(){
    return{
        restrict:'A',
        replace:true,
        template:company,
        scope:{
            com: '='
        },
        link: function(scope){
            
        }        
    }
}
