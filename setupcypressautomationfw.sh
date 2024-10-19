#install node which installs npm. To verify run 'node -v && npm -v'
#brew install node@20
mkdir frontend_automation_framework1
cd frontend_automation_framework1
npm init -y
#mkdir /tmp/cypress_cache
mkdir /Users/rakeshhb/Downloads/cypress_cache
#export CYPRESS_CACHE_FOLDER="/tmp/cypress_cache"
export CYPRESS_CACHE_FOLDER="/Users/rakeshhb/Downloads/cypress_cache"
npm install cypress --save-dev
