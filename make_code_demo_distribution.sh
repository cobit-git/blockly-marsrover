#!/bin/bash
main_dir=~/blockly-marsrover
cd ..
chmod a+w $main_dir

cd $main_dir
# set the directory path
target=./distribution
demo_dir=./demos
code_dir=./code
target_msg=./msg
target_build_msg=./build_msg

# check if the directory exists
if [ ! -d "$target" ]; then
  # if the directory does not exist, create it
  mkdir "$target"
  
  echo "Directory created! target"
else
  echo "Directory already exists target."
fi

cd $target

if [ ! -d "$target_msg" ]; then
  # if the directory does not exist, create it
  mkdir "$target_msg"
  
  echo "Directory created! msg"
else
  echo "Directory already exists msg."
fi

if [ ! -d "$target_build_msg" ]; then
  # if the directory does not exist, create it
  mkdir "$target_build_msg"
  
  echo "Directory created! build msg"
else
  echo "Directory already exists build msg."
fi

cd ..


src_dir=./demos/code
target_dir=./distribution
comp_dir=./dist
media_dir=./media
msg_dir=./demos/code/msg
build_msg_dir=./build/msg

build_msg_target_dir=./distribution/build_msg

pwd

# copy file1.txt and file2.txt from the source directory to the destination directory
cp -r $src_dir/* $target_dir
cp -r $comp_dir/* $target_dir
cp -r $media_dir/* $target_dir
cp -r $msg_dir/* $target_msg
cp -r $build_msg_dir/* $build_msg_target_dir

echo "Files copied successfully!"
