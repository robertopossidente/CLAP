Search.setIndex({docnames:["autoapi/clap/common/cluster_repository/index","autoapi/clap/common/commands/index","autoapi/clap/common/config/index","autoapi/clap/common/driver/index","autoapi/clap/common/exceptions/index","autoapi/clap/common/factory/index","autoapi/clap/common/index","autoapi/clap/common/platform/index","autoapi/clap/common/repository/index","autoapi/clap/common/utils/index","autoapi/clap/drivers/elasticluster/driver/index","autoapi/clap/drivers/elasticluster/index","autoapi/clap/drivers/index","autoapi/clap/index","autoapi/index","configuration","groups","index","installation","pythonapi","shared_groups","troubleshooting","tutorials","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["autoapi/clap/common/cluster_repository/index.rst","autoapi/clap/common/commands/index.rst","autoapi/clap/common/config/index.rst","autoapi/clap/common/driver/index.rst","autoapi/clap/common/exceptions/index.rst","autoapi/clap/common/factory/index.rst","autoapi/clap/common/index.rst","autoapi/clap/common/platform/index.rst","autoapi/clap/common/repository/index.rst","autoapi/clap/common/utils/index.rst","autoapi/clap/drivers/elasticluster/driver/index.rst","autoapi/clap/drivers/elasticluster/index.rst","autoapi/clap/drivers/index.rst","autoapi/clap/index.rst","autoapi/index.rst","configuration.rst","groups.rst","index.rst","installation.rst","pythonapi.rst","shared_groups.rst","troubleshooting.rst","tutorials.rst","usage.rst"],objects:{"":{clap:[13,0,0,"-"]},"clap.common":{cluster_repository:[0,0,0,"-"],commands:[1,0,0,"-"],config:[2,0,0,"-"],driver:[3,0,0,"-"],exceptions:[4,0,0,"-"],factory:[5,0,0,"-"],platform:[7,0,0,"-"],repository:[8,0,0,"-"],utils:[9,0,0,"-"]},"clap.common.cluster_repository":{ClusterInfo:[0,1,1,""],NodeInfo:[0,1,1,""],PlatformControlInfo:[0,1,1,""],RepositoryOperations:[0,1,1,""]},"clap.common.cluster_repository.ClusterInfo":{__repr__:[0,2,1,""]},"clap.common.cluster_repository.NodeInfo":{__repr__:[0,2,1,""]},"clap.common.cluster_repository.RepositoryOperations":{_delete_clusters_info:[0,2,1,""],_delete_nodes_info:[0,2,1,""],_get_platform_repository:[0,2,1,""],_read_clusters_info:[0,2,1,""],_read_nodes_info:[0,2,1,""],create_platform_db:[0,2,1,""],exists_platform_db:[0,2,1,""],get_all_clusters:[0,2,1,""],get_all_nodes:[0,2,1,""],get_cluster:[0,2,1,""],get_clusters:[0,2,1,""],get_node:[0,2,1,""],get_nodes:[0,2,1,""],get_nodes_from_cluster:[0,2,1,""],get_platform_control:[0,2,1,""],read_platform_control_info:[0,2,1,""],remove_cluster:[0,2,1,""],remove_node:[0,2,1,""],write_cluster_info:[0,2,1,""],write_node_info:[0,2,1,""],write_platform_control_info:[0,2,1,""]},"clap.common.commands":{AbstractParser:[1,1,1,""]},"clap.common.commands.AbstractParser":{get_parser:[1,2,1,""]},"clap.common.config":{ConfigReader:[2,1,1,""],Defaults:[2,1,1,""],INSTANCE_SCHEMA:[2,4,1,""],LOGIN_SCHEMA:[2,4,1,""],PROVIDERS_SCHEMA:[2,4,1,""]},"clap.common.config.ConfigReader":{__check_instances:[2,2,1,""],__validate:[2,2,1,""],get_instance:[2,2,1,""],get_instances:[2,2,1,""],get_login:[2,2,1,""],get_logins:[2,2,1,""],get_provider:[2,2,1,""],get_providers:[2,2,1,""]},"clap.common.config.Defaults":{DEFAULT_CONF_TYPE:[2,3,1,""],DRIVER_ID:[2,3,1,""],PLATFORM_REPOSITORY:[2,3,1,""],REPOSITORY_TYPE:[2,3,1,""],app_name:[2,3,1,""],cloud_conf:[2,3,1,""],configs_path:[2,3,1,""],elasticluster_storage_path:[2,3,1,""],execution_playbook:[2,3,1,""],groups_path:[2,3,1,""],instances_conf:[2,3,1,""],log_level:[2,3,1,""],login_conf:[2,3,1,""],modules_path:[2,3,1,""],private_path:[2,3,1,""],storage_path:[2,3,1,""]},"clap.common.driver":{AbstractInstanceInterface:[3,1,1,""],Codes:[3,1,1,""]},"clap.common.driver.AbstractInstanceInterface":{__interface_id__:[3,3,1,""],__interface_version__:[3,3,1,""],check_nodes_alive:[3,2,1,""],execute_playbook_in_nodes:[3,2,1,""],get_connection_to_nodes:[3,2,1,""],pause_nodes:[3,2,1,""],resume_nodes:[3,2,1,""],start_nodes:[3,2,1,""],stop_nodes:[3,2,1,""]},"clap.common.driver.Codes":{NODE_STATUS_INIT:[3,3,1,""],NODE_STATUS_PAUSED:[3,3,1,""],NODE_STATUS_REACHABLE:[3,3,1,""],NODE_STATUS_STOPPED:[3,3,1,""],NODE_STATUS_UNREACHABLE:[3,3,1,""]},"clap.common.exceptions":{ClusterCreationError:[4,5,1,""],ClusterError:[4,5,1,""],ModuleError:[4,5,1,""],RepositoryError:[4,5,1,""],TableAlreadyExists:[4,5,1,""],ValueNotFound:[4,5,1,""]},"clap.common.exceptions.TableAlreadyExists":{__str__:[4,2,1,""]},"clap.common.factory":{PlatformFactory:[5,1,1,""]},"clap.common.factory.PlatformFactory":{__module_iface__:[5,3,1,""],__multi_instance_api__:[5,3,1,""],get_instance_api:[5,2,1,""],get_module_interface:[5,2,1,""]},"clap.common.platform":{GroupInterface:[7,1,1,""],ModuleInterface:[7,1,1,""],MultiInstanceAPI:[7,1,1,""]},"clap.common.platform.GroupInterface":{GROUP_SCHEMA:[7,3,1,""],__find_groups:[7,2,1,""],__groups_actions_map__:[7,3,1,""],get_group:[7,2,1,""],get_group_names:[7,2,1,""]},"clap.common.platform.ModuleInterface":{__find_modules:[7,2,1,""],__modules_map__:[7,3,1,""],get_module:[7,2,1,""],get_module_names:[7,2,1,""],get_modules:[7,2,1,""]},"clap.common.platform.MultiInstanceAPI":{__add_nodes_to_group:[7,2,1,""],__check_nodes_in_group:[7,2,1,""],__execute_group_action:[7,2,1,""],__execute_group_action_sequence:[7,2,1,""],__find_ifaces:[7,2,1,""],__interfaces_map__:[7,3,1,""],_get_instance_iface:[7,2,1,""],add_nodes_to_group:[7,2,1,""],add_tags_to_nodes:[7,2,1,""],check_nodes_alive:[7,2,1,""],execute_group_action:[7,2,1,""],execute_playbook_in_nodes:[7,2,1,""],get_connection_to_nodes:[7,2,1,""],get_groups:[7,2,1,""],get_node:[7,2,1,""],get_nodes:[7,2,1,""],get_nodes_with_tags:[7,2,1,""],remove_nodes_from_group:[7,2,1,""],remove_tags_from_nodes:[7,2,1,""],start_nodes:[7,2,1,""],stop_nodes:[7,2,1,""]},"clap.common.repository":{AbstractEntry:[8,1,1,""],AbstractRepository:[8,1,1,""],RepositoryFactory:[8,1,1,""],TinyDBRepository:[8,1,1,""],check_and_create_table:[8,6,1,""],generic_read_entry:[8,6,1,""],generic_write_entry:[8,6,1,""]},"clap.common.repository.AbstractRepository":{__repository_id__:[8,3,1,""],__repository_name__:[8,3,1,""],__repository_version__:[8,3,1,""],create_element:[8,2,1,""],create_table:[8,2,1,""],drop_elements:[8,2,1,""],drop_tables:[8,2,1,""],exists_table:[8,2,1,""],retrieve_elements:[8,2,1,""],retrieve_tables:[8,2,1,""],update_element:[8,2,1,""]},"clap.common.repository.RepositoryFactory":{exists_repository:[8,2,1,""],get_repository:[8,2,1,""]},"clap.common.repository.TinyDBRepository":{DEFAULT_STORAGE_TYPE:[8,3,1,""],__repository_id__:[8,3,1,""],__repository_name__:[8,3,1,""],__repository_version__:[8,3,1,""],__storage_types_map:[8,3,1,""],create_element:[8,2,1,""],create_table:[8,2,1,""],drop_elements:[8,2,1,""],drop_tables:[8,2,1,""],exists_table:[8,2,1,""],retrieve_elements:[8,2,1,""],retrieve_tables:[8,2,1,""],update_element:[8,2,1,""]},"clap.common.utils":{Struct:[9,1,1,""],get_file_checksum:[9,6,1,""],log:[9,4,1,""],path_extend:[9,6,1,""],setup_log:[9,6,1,""],yaml_load:[9,6,1,""]},"clap.common.utils.Struct":{__delitem__:[9,2,1,""],__getitem__:[9,2,1,""],__iter__:[9,2,1,""],__len__:[9,2,1,""],__setitem__:[9,2,1,""],copy:[9,2,1,""],keys:[9,2,1,""]},"clap.drivers":{elasticluster:[11,0,0,"-"]},"clap.drivers.elasticluster":{"interface":[11,4,1,""],ElasticlusterInterface:[11,1,1,""],driver:[10,0,0,"-"]},"clap.drivers.elasticluster.ElasticlusterInterface":{__get_or_create_cluster:[11,2,1,""],__interface_id__:[11,3,1,""],__stop_cluster:[11,2,1,""],check_nodes_alive:[11,2,1,""],execute_playbook_in_nodes:[11,2,1,""],get_connection_to_nodes:[11,2,1,""],pause_nodes:[11,2,1,""],resume_nodes:[11,2,1,""],start_nodes:[11,2,1,""],stop_nodes:[11,2,1,""]},"clap.drivers.elasticluster.driver":{AnsibleSetupProviderWrapper:[10,1,1,""],ElasticCreator:[10,1,1,""],ElasticlusterInterface:[10,1,1,""],elasticluster_check_starting_nodes:[10,6,1,""],elasticluster_get_connection_to_node:[10,6,1,""],elasticluster_pause_nodes:[10,6,1,""],elasticluster_stop_nodes:[10,6,1,""],elaticluster_start_nodes:[10,6,1,""]},"clap.drivers.elasticluster.driver.AnsibleSetupProviderWrapper":{_write_extra_vars:[10,2,1,""],build_inventory:[10,2,1,""],run_playbook:[10,2,1,""]},"clap.drivers.elasticluster.driver.ElasticCreator":{__to_elasticluster_config:[10,2,1,""],create_cluster_obj:[10,2,1,""],exists_cluster:[10,2,1,""],get_all_cluster_objs:[10,2,1,""],get_cluster_obj:[10,2,1,""],get_final_config:[10,2,1,""],get_node_from_cluster:[10,2,1,""],get_nodes_from_cluster:[10,2,1,""],update_cluster_config:[10,2,1,""],upddate_cluster_node:[10,2,1,""]},"clap.drivers.elasticluster.driver.ElasticlusterInterface":{__get_or_create_cluster:[10,2,1,""],__interface_id__:[10,3,1,""],__stop_cluster:[10,2,1,""],check_nodes_alive:[10,2,1,""],execute_playbook_in_nodes:[10,2,1,""],get_connection_to_nodes:[10,2,1,""],pause_nodes:[10,2,1,""],resume_nodes:[10,2,1,""],start_nodes:[10,2,1,""],stop_nodes:[10,2,1,""]},clap:{common:[6,0,0,"-"],drivers:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","data","Python data"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:data","5":"py:exception","6":"py:function"},terms:{"07d0cf3af28718ef8":15,"abstract":[1,3,8,10,11],"boolean":[0,15],"class":[0,1,2,3,5,7,8,9,10,11],"default":[0,2,5,8,10,15,16],"final":[16,23],"float":23,"function":0,"int":[3,7,9,10,11],"new":[0,8,15,16],"public":15,"return":[0,5,7,8,9],"static":[5,7,8,10],"super":15,"true":[0,8,15],"try":[18,23],AWS:[15,20,23],Adding:20,And:[16,23],For:[15,16,20,23],IDs:[15,23],Ids:0,Its:23,The:[0,3,5,7,8,15,16,18,20,23],Then:16,These:15,__add_nodes_to_group:7,__check_inst:2,__check_nodes_in_group:7,__delitem__:9,__execute_group_act:7,__execute_group_action_sequ:7,__find_group:7,__find_ifac:7,__find_modul:7,__get_or_create_clust:[10,11],__getitem__:9,__groups_actions_map__:7,__interface_id__:[3,10,11],__interface_version__:3,__interfaces_map__:7,__iter__:9,__len__:9,__module_iface__:5,__modules_map__:7,__multi_instance_api__:5,__repository_id__:8,__repository_name__:8,__repository_version__:8,__repr__:0,__setitem__:9,__stop_clust:[10,11],__storage_types_map:8,__str__:4,__to_elasticluster_config:10,__valid:2,_delete_clusters_info:0,_delete_nodes_info:0,_get_instance_ifac:7,_get_platform_repositori:0,_read_clusters_info:0,_read_nodes_info:0,_subparsersact:1,_write_extra_var:10,abc:9,abcdfefxx:15,about:[0,15,16,23],abov:[15,16,20,23],abstractdescriptorentri:8,abstractentri:[0,8],abstractinstanceinterfac:[3,10,11],abstractpars:1,abstractrepositori:[0,8],access:[8,15],access_keyfil:15,accomplish:16,across:[0,5],action:[7,15,16,17,18,23],activ:[18,23],add:[15,16,20,23],add_nodes_to_group:7,add_tags_to_nod:7,added:[16,20,23],adding:[8,15],addit:[0,8,20],address:0,after:[8,16,18,23],aim:23,akiaiosfodnn7exampl:15,all:[0,7,8,15,16,18,20,23],allow:[15,17,23],almost:23,alreadi:[0,8,23],also:[15,16,18,23],altern:23,alwai:[8,23],amazon:[15,23],amazonaw:15,ami:15,among:15,ani:[8,10,23],anoth:[8,16,23],ans:16,ansibl:[17,23],ansible_host:16,ansible_provid:10,ansible_us:16,ansiblesetupprovid:10,ansiblesetupproviderwrapp:10,anywai:16,api:[5,7,17],app_nam:2,appar:23,appear:[16,23],append:[16,23],applic:[15,17],arg:[0,3,4,7,8,9,10,11],argpars:1,argument:8,assign:23,associ:[8,16,23],attach:0,auto:14,autoapi:14,autom:17,automat:[16,20,23],avail:[15,16],avali:0,aws:[0,15,23],azur:0,backslash:16,base:[0,4,8,9,10,11,15,16,17,18,20,23],basic:[8,16,17],becom:16,befor:[8,15],being:16,belong:[16,20,23],below:[15,16,20,23],better:16,between:[3,15],bin:[18,23],block:15,bool:[0,8],boot_disk_devic:15,boot_disk_s:15,boot_disk_typ:15,both:16,bpxrficyexamplekei:15,build_inventori:10,button:15,bypass:16,call:[15,16],can:[0,8,15,16,23],cannot:[15,23],capabl:15,cast:8,cast_to:8,cento:15,chanc:15,chang:23,charact:16,check:[0,8],check_and_create_t:8,check_nodes_al:[3,7,10,11],chmod:[15,18],clap:[14,15,18,23],clapp:[16,18,20,23],claus:8,clearer:16,cli:[15,18],client:20,clone:18,cloud:[0,7,17,18,20,23],cloud_conf:[2,10,11],cluster:[0,3,5,7,10,15,17,23],cluster_id:[0,10,11],cluster_nam:[0,10],cluster_repositori:[6,13,14],clustercreationerror:4,clustererror:4,clusterinfo:0,code:3,collect:9,com:[15,18],come:23,command:[6,13,14,15,17,18,20,23],commands_pars:1,common:[10,11,13,14,16,23],commun:15,compos:0,comput:[15,17,23],concept:[16,18],condit:8,condition:16,config2:15,config:[6,13,14,15,23],configread:2,configs_path:2,configur:[16,17,18,23],connect:[0,15,16],connection_ip:23,consid:23,consist:15,consol:23,contain:[7,8,14,15,16,23],content:[16,17],control:[0,23],convert:8,copi:[9,15,16],correct:[0,23],correspond:15,could:15,creat:[0,3,8,14,15,16,17,18],create_cluster_obj:10,create_el:8,create_new:8,create_platform_db:0,create_repositori:8,create_t:8,creation:23,creiteria:8,creteria:8,criteria:8,criterion:0,current:15,data:[2,8,16],databas:[0,8],debian:20,debug:23,default_conf_typ:[2,10],default_driv:[5,7],default_storage_typ:8,defin:[15,16,17,23],delet:8,denot:16,depend:15,deploi:17,deploy:16,deriv:8,describ:[16,23],descript:[15,16,20],desir:[15,16,23],detail:[15,23],determin:16,dev:[15,18],devic:15,dict:[2,3,7,8,9,10,11],dictionari:[0,8,15,16],differ:[5,7,15,16,17,23],directli:[3,23],directori:[15,16,18,20,23],discuss:23,disk:15,distribut:16,doc:15,docker:16,document:[8,14,15,20],doe:[8,15,23],don:23,download:15,driver:[0,5,6,7,13,14,15],driver_id:[0,2,5,7],driver_vers:0,drop:[0,8],drop_el:8,drop_tabl:8,dsa:15,each:[0,15,16,23],easi:17,easili:[17,23],east:[15,23],ec2:[15,16,23],ec2_access_kei:15,echo:23,eclasticluster_config_fil:10,edit:[15,16],efs:[16,20],efs_mount_point:20,elasticcr:10,elasticlust:[2,12,13,14,15,16,17],elasticluster_check_starting_nod:10,elasticluster_get_connection_to_nod:10,elasticluster_pause_nod:10,elasticluster_stop_nod:10,elasticluster_storage_path:[2,10],elasticlusterinterfac:[10,11],elaticluster_start_nod:10,element:[0,8],els:[0,8,16],enabl:15,endpoint:15,enter:18,entri:[3,8,16],env:[18,23],environ:23,error:[7,15,16,23],error_act:7,etc:[15,16,17],even:15,everi:[8,15,16,23],exampl:[15,16,20,23],example_act:16,example_group:16,except:[0,6,8,13,14],execut:[15,16,18,20],execute_group_act:7,execute_playbook_in_nod:[3,7,10,11],execution_playbook:2,exist:[0,8,16],exists_clust:10,exists_platform_db:0,exists_repositori:8,exists_t:8,explain:16,extend:[15,17],extra:[16,20,23],extra_arg:[3,7,10,11],extra_var:10,factori:[6,13,14],fail:[0,8,15,16],failur:23,fals:[0,8],fashion:16,featur:[17,23],field:[8,15],file:[0,15,16,17,20,23],file_path:9,filenam:[9,10,15],filesystem:[15,20],filter:16,fingerprint:23,first:[8,15,16,18,20,23],flavor:[0,15],follow:[0,15,16,20,23],format:[8,15,16,23],found:16,friendli:17,from:[0,7,8,15,16,20,23],gcc:18,gener:[8,14,15,16],generic_read_entri:8,generic_write_entri:8,get:[0,5,7,8,15,23],get_all_clust:0,get_all_cluster_obj:10,get_all_nod:0,get_clust:0,get_cluster_obj:10,get_connection_to_nod:[3,7,10,11],get_file_checksum:9,get_final_config:10,get_group:7,get_group_nam:7,get_inst:2,get_instance_api:5,get_login:2,get_modul:7,get_module_interfac:5,get_module_nam:7,get_nod:[0,7],get_node_from_clust:10,get_nodes_from_clust:[0,10],get_nodes_with_tag:7,get_pars:1,get_platform_control:0,get_provid:2,get_repositori:8,gib:15,gibibyt:15,git:18,github:18,given:0,gp2:15,group1:16,group2:16,group:[7,15,17,18,23],group_arg:7,group_hosts_map:[3,7,10,11],group_nam:7,group_path:7,group_schema:7,group_var:[3,10,11,15,16],groupinterfac:7,groups_path:2,guid:17,hadoop:17,has:[16,23],hat:20,have:[15,16,23],help:[18,23],helper:[0,8],here:20,heterogen:17,higher:23,hold:[0,8,15,16],home:15,host:[7,15,17,20],how:[15,16,18,23],hpc:17,http:[15,18],identif:0,ids:[0,16],ignor:[7,23],imag:15,image_id:15,image_userdata:15,imlpement:8,implement:[3,7,8,16],includ:[15,16],increas:23,increment:0,index:[0,17],indic:8,info:[8,9],info_typ:8,inform:[0,8,15,16,18,20,23],inherit:8,initi:[3,9],input:23,insert:[8,15],insid:[8,15,16,23],instal:[16,17,20,23],instanc:[0,9,10,16,17,18,20],instance_nam:2,instance_schema:2,instance_typ:23,instances_conf:2,instances_fil:2,instances_num:[3,7,10,11],instanti:[16,23],instead:3,intanc:20,interact:[3,15,17,20,23],interest:23,interfac:[0,3,5,7,11,17,18],interfaceid:3,invalid:[8,15],inventory_nam:16,invok:16,io1:15,iop:15,ips:23,its:[8,15,23],itself:15,jobmanag:23,json:[2,8,10,15],just:[15,16,23],k7mdeng:15,kei:[0,8,9,16,23],key_pair:15,key_us_east_1:15,keyfil:15,keygen:15,keypair:[0,15,23],keypair_nam:15,keypair_private_fil:15,keypair_public_fil:15,keyword:[8,16,23],kind_groups_map:10,kind_key_value_var:10,known:[0,16],kwarg:[0,3,4,7,8,9,10,11],larg:15,last:[0,16,23],late:23,latenc:15,later:23,launch:[15,18,23],layout:16,least:16,let:16,level:23,libc6:18,libffi:18,libssl:18,like:15,line:[16,23],list:[0,3,7,8,10,11,16,20],lmcad:18,load:16,log:[9,15],log_level:2,log_nam:9,login:[16,17,23],login_conf:[2,10,11],login_config:10,login_nam:[2,10],login_schema:2,logins_fil:2,look:16,low:15,machin:[0,15,16,23],mai:[15,16,23],main:[15,16],make:15,manag:[3,7,16,17,23],mandatori:16,mani:15,manipul:5,manner:7,map:15,master:16,match:[0,8,15],max_concurrent_request:10,mean:[16,20],mechan:23,medium:15,mei:23,menu:15,messag:[16,23],metadata:15,method:8,micro:[0,15],minim:[15,16],model:8,modifi:8,modul:[15,17],module_nam:7,moduleerror:4,moduleinterfac:[5,7],modules_path:2,more:[15,16,20,23],mount:[16,20],mount_ip:20,mount_permiss:20,mpi:17,much:16,multiinst:5,multiinstanceapi:[5,7],multipl:[16,17],must:[8,15,16,20,23],mutablemap:9,name:[0,7,8,9,15,16,20],need:[15,16,18,20,23],network:[15,20],network_id:15,nfs:20,node:[0,3,5,7,10,15,16,17,18,20],node_id:[0,3,7,10,11],node_nam:[0,10],node_name_id_map:10,node_obj:10,node_status_init:3,node_status_paus:3,node_status_reach:3,node_status_stop:3,node_status_unreach:3,nodeinfo:0,none:[0,3,7,8,9,10,11],notat:8,note:[15,16,23],noth:[0,8],now:16,number:23,obj:8,object:[0,3,5,8,9],obtain:[15,23],occur:23,offer:23,ola:23,old:8,onc:[15,16,23],one:[0,8,15,16,20,23],onli:[15,16,20,23],open:0,oper:[0,7,8,16,23],optim:16,option:[15,16,23],orchestr:16,order:[15,16],organ:16,orient:8,other:[15,16,23],otherwis:8,output:[16,23],outsid:15,overwrit:[0,8],own:18,owner:20,packag:[7,16,18],page:[14,17,23],pair:[15,23],paramet:[0,7,8,16,20,23],paramiko:10,part:15,parti:15,particular:16,pass:[0,8,16,23],password:15,past:15,path:[15,20],path_extend:9,path_to_key_pair:15,paus:[3,20],pause_nod:[3,10,11],pem:15,perform:[0,7,15,16,17,23],period:23,permiss:[15,20],person1:8,person_id:8,pick:5,pip:18,place:[15,16],placement:15,placement_group:15,platform:[0,3,6,13,14,15,17,23],platform_db:[5,7],platform_repositori:[0,2,5],platformcod:0,platformcontrolinfo:0,platformfactori:5,playbook:[10,16,17,23],playbook_path:[3,7,10,11],point:16,polici:8,popul:15,power:16,pre:16,preced:23,present:15,print:23,privat:[0,15],private_path:2,problem:16,program:16,project:17,properli:8,properti:15,provid:[0,7,10,16,17,18,20,23],provider_config:10,provider_id:23,provider_nam:[2,10],providers_fil:2,providers_schema:2,provis:15,prudent:23,pub:15,purpos:15,put:23,python3:18,python:[16,17],queri:[0,8],rais:[0,8,15],reachabl:[3,23],read:[0,8,15],read_platform_control_info:0,receiv:16,recommend:23,red:20,refer:[15,17,23],region:[0,15],remot:16,remov:[8,16,23],remove_act:7,remove_clust:0,remove_nod:0,remove_nodes_from_group:7,remove_tags_from_nod:7,replac:[8,23],repositori:[0,3,6,7,13,14,18],repository_oper:[3,10,11],repository_path:8,repository_typ:[0,2,5,7,8],repositoryerror:4,repositoryfactori:8,repositoryoper:[0,3,10,11],repres:[0,8],repsitori:8,requir:[15,16,18],resourc:15,respect:23,respons:3,resum:[20,23],resume_nod:[3,10,11],retriev:[0,8,23],retrieve_el:8,retrieve_t:8,retriv:8,right:23,role:[15,16],root:[15,18],row:[16,18,23],rsa:[15,23],rule:15,run:[15,16,18,20,23],run_playbook:10,sai:16,same:[0,8,15,17,23],save:15,schema:2,script:[15,18,23],sda1:15,search:[8,17],secgroup:15,second:[20,23],secret:15,secret_access_keyfil:15,section:[15,16,18,23],secur:15,security_group:15,see:[0,15,16,20,23],select:[16,23],self:[0,1,2,3,4,7,8,9,10,11],sensit:15,serializ:8,servic:[16,20],set:[8,10,15,16,18,23],setup:[16,17],setup_log:9,sever:[0,15,16,18,23],shallow:9,share:[16,17],shell:[15,23],shortli:16,should:16,show:[16,18,20,23],shown:[15,16,23],similar:8,similarli:23,siml:8,simpl:23,simplifi:17,singl:8,size:15,slave:16,some:[8,15,17,18,20,23],someth:15,sometim:16,sorri:[19,21,22],sourc:[18,23],spark:17,special:17,specif:[8,15,16,23],specifi:[8,15,16,23],spefici:16,sphinx:14,spit:23,split:16,ssd:15,ssh:[0,15,23],sshclient:10,stand:15,standard:15,start:[15,16,20],start_nod:[3,7,10,11],statu:[0,3,23],stderr:23,stdout:23,stop:[3,16,17,20,23],stop_nod:[3,7,10,11],storag:[8,15],storage_path:[2,10],storage_typ:[8,10],store:[0,15,16],str:[0,2,3,4,5,7,8,9,10,11],string:[15,16,20,23],struct:[8,9],structur:[15,16],style:17,subnet:15,subset:16,successfulli:[16,23],sudo:15,sudo_us:15,suppli:23,support:[8,23],suppos:16,system:[15,17,20],t2small:15,tabl:[0,8],table_nam:[4,8],tablealreadyexist:[0,4,8],tag:[0,7,16],take:16,taken:8,task:16,taskmanag:23,templat:[0,17,23],termin:16,than:23,them:[15,16,23],thi:[0,8,9,14,15,16,20,23],third:15,tho:20,thread:23,three:23,time:[17,23],timeout:23,tinydb:[2,8],tinydbrepositori:8,tip:17,tomount:20,tool:17,tradit:16,transpar:[7,23],tree:16,troubleshoot:[17,23],tupl:10,tutori:[16,17],two:[15,16],type:[0,5,7,8,15,16,20,23],ubuntu:[15,20,23],umount:16,undefin:16,understand:16,unicamp:18,uninstal:16,union:7,uniqu:[0,15,23],unmount:20,unreach:3,updat:[0,8,23],update_cluster_config:10,update_el:8,upddate_cluster_nod:10,upload:23,upon:8,url:15,usag:[17,18],use:[15,16,17,18,23],used:[0,5,7,8,15,16,20,23],useful:23,user:[0,15,16,17,20],userto:15,uses:[15,16,23],using:[8,15,16,23],usual:[15,16],util:[6,8,13,14],vaiabl:16,val:9,valu:[8,16,23],valuabl:16,value1:16,valueerror:8,valuenotfound:4,var2:16,variabl:[8,17,23],variable1:[16,23],variable2:23,verbos:[16,23],verbosity_level:9,veri:23,version:0,via:[15,17,18,20,23],virtual:[15,18,23],virtualenv:18,volum:15,vpc:15,wai:[16,23],want:[15,16,23],what:23,when:[0,8,15,16,20,23],where:[0,8,15,16,20,23],which:[8,16],whole:15,without:15,wjalrxutnfemi:15,work:[17,23],worri:23,would:[16,20],write:[0,8,18],write_cluster_info:0,write_node_info:0,write_platform_control_info:0,written:[0,8,18,19,21,22],xxx:[0,15,23],yaml:[15,17,23],yaml_load:9,yet:23,yml:[10,15,16,23],you:[15,16,18,23],your:[15,18,23],zone:[0,15]},titles:["<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.cluster_repository</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.commands</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.config</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.driver</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.exceptions</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.factory</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.platform</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.repository</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.common.utils</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.drivers.elasticluster.driver</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.drivers.elasticluster</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.drivers</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap</span></code>","API Reference","Basic Configuration Setup","Groups","CLAP","Installation Guide","Python API","Groups shared with CLAP","Troubleshooting","Tutorials","Usage"],titleterms:{EFS:20,action:20,aliv:23,ansibl:16,api:[14,19],avail:23,basic:15,check:23,clap:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,20],cloud:15,cluster_repositori:0,command:[1,16],common:[0,1,2,3,4,5,6,7,8,9,20],config:2,configur:15,connect:23,content:[0,1,2,3,4,5,7,8,9,10,11],docker:20,driver:[3,10,11,12],ec2:20,elasticlust:[10,11],except:4,execut:23,factori:5,group:[16,20],guid:18,host:16,indic:17,instal:18,instanc:[15,23],kei:15,list:23,login:15,modul:[0,1,2,3,4,5,7,8,9,10],node:23,packag:11,platform:7,provid:15,python:19,refer:14,repositori:8,setup:[15,20],share:20,some:16,special:16,start:23,submodul:[6,11],subpackag:[12,13],tabl:17,tag:23,templat:15,termin:23,tip:16,troubleshoot:21,tutori:22,umount:20,usag:23,util:9,valid:15,valu:15,variabl:[16,20],work:16}})