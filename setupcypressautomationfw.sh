#install node which installs npm. To verify run 'node -v && npm -v'
#brew install node@20
mkdir frontend_automation_framework
cd frontend_automation_framework
npm init -y
#mkdir /tmp/cypress_cache
mkdir /Users/rakesh/cypress_cache
#export CYPRESS_CACHE_FOLDER="/tmp/cypress_cache"
export CYPRESS_CACHE_FOLDER="/Users/rakeshhb/Downloads/cypress_cache"
npm install cypress --save-dev
